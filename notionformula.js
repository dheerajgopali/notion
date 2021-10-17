prop("Review Frequency") == "Weekly"? 
	dateAdd(prop("Last Review"), 1, "weeks"):
	prop("Review Frequency") == "Monthly"?
		dateAdd(prop("Last Review"), 1, "months"):
		prop("Review Frequency") == "Quarterly"?
			dateAdd(prop("Last Review"), 3, "months"):
			prop("Review Frequency") == "First Saturday"?
				dateAdd(dateAdd(dateAdd(fromTimestamp(0), 6 - toNumber(day(dateAdd(dateAdd(dateAdd(fromTimestamp(0), 0, "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years"))), "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years"):
				prop("Review Frequency") == "First Sunday"?
					dateAdd(dateAdd(dateAdd(fromTimestamp(0), 
					toNumber(day(dateAdd(dateAdd(dateAdd(fromTimestamp(0), 
					0, "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years")))>0?
					7 - toNumber(day(dateAdd(dateAdd(dateAdd(fromTimestamp(0), 
					0, "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years"))):
					0,
					"days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years"):
					prop("Review Frequency") == "Last Sunday"?
						dateAdd(dateAdd(dateAdd(fromTimestamp(0), 
						toNumber(day(dateAdd(dateAdd(dateAdd(fromTimestamp(0), 
						-1, "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years")))>0?
						unaryMinus(toNumber(day(dateAdd(dateAdd(dateAdd(fromTimestamp(0), 
						0, "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years")))):
						-1,
						"days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years"):
						prop("Review Frequency") == "Last Saturday"?
							dateAdd(dateAdd(dateAdd(fromTimestamp(0), -1+unaryMinus(toNumber(day(dateAdd(dateAdd(dateAdd(fromTimestamp(0), -1, "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years")))+1), "days"), month(prop("Last Review")) + 1, "months"), toNumber(year(prop("Last Review"))) - 1970, "years"):
						dateAdd(prop("Last Review"), 0, "days")