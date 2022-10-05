import DateTimeControl from ".";

const originalDateTime = new Date();

const timeDiff = (a: Date, b: Date) => {
	const diff = a.getTime() - b.getTime();
	if (diff < 0) return diff * -1;
	return diff;
};

const dateToSet = new Date("7/8/2017 9:45:32 AM");
const hrtime = process.hrtime();
DateTimeControl.setDateTime(dateToSet).then(() => {
	const [s, ns] = process.hrtime(hrtime);
	console.log(`Setting time took: ${s * 1000 + ns / 1000000}ms`);
	const newDate = new Date();
	if (timeDiff(dateToSet, newDate) > 10) {
		throw new Error(`Tests Failed! System time was not set correctely.\nExpected: ${dateToSet.toISOString()}\nGot: ${newDate.toISOString()}`);
	}
	DateTimeControl.setDateTime(originalDateTime);
});
