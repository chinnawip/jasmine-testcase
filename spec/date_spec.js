describe("Date Validation", function() {
describe("Rule : DAT00003", function() {
		var dateFieldValue = ["1212","9.9.","9.9","12121","12.9.","3212","1213"], 
			dateFormatInput = "TTMM,T.M.", 
			dateFormatOutput = "TTMM", 
			dateRange = "";
                    	
		it("should validate the date '"+dateFieldValue[0]+ "' because it is in TTMM format", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("1212");
		});
		//var dateFieldValue1 = "9.9.";
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in T.M. format", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("0909");
		});
		//var dateFieldValue2 = "9.9";
		it("should not validate the date '"+dateFieldValue[2]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[3]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format"); 
		}); 
		it("should not validate the date '"+dateFieldValue[5]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[6]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[6], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		
	});
	describe("Rule : DAT00004", function() {
		var dateFieldValue = ["121212","9.9.12","12.12.00","9.9.2","12121","12.12.1","321200","121312" ], 
			dateFormatInput = "TTMMJJ,T.M.JJ,TT.MM.JJ",
			dateFormatOutput = "TTMMJJ", 
			dateRange = "";

		it("should validate the date '"+dateFieldValue[0]+ "' because it is in TTMMJJ format", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("121212");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in T.M.JJ format", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("090912");
		});
		
		it("should validate the date '"+dateFieldValue[2]+ "'  because it is in TT.MM.JJ format", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("121200");
		});
		it("should not validate the date '"+dateFieldValue[3]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[5]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[6]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[6], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[7]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[7], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});

	describe("Rule : DAT00005", function() {
		var dateFieldValue = ["12121212","111100", "9.9.12","1.1.1200","9.9.2","12121","12.12.1","32122000","12131200" ], 
			dateFormatInput = "TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ",
			dateFormatOutput = "TTMMJJJJ", 
			dateRange = "";

		it("should validate the date '"+dateFieldValue[0]+ "' because it is in TTMMJJJJ format", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("12121212");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in TTMMJJ format", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("11112000");
		});
		
		it("should validate the date '"+dateFieldValue[2]+ "'  because it is in T.M.JJ format", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09092012");
		});
		it("should validate the date '"+dateFieldValue[3]+ "'  because it is in T.M.JJJJ format", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("01011200");
		});
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[5]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[6]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[6], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[7]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[7], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[8]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[8], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});

	describe("Rule : DAT00006", function() {
		var dateFieldValue = ["1212","9.12","112","9.200","12121","1300" ], 
			dateFormatInput = "MMJJ,M.JJ",
			dateFormatOutput = "MMJJ", 
			dateRange = "";
                  
		it("should validate the date '"+dateFieldValue[0]+ "' because it is in MMJJ format", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("1212");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in M.JJ format", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("0912");
		});
		
		it("should not validate the date '"+dateFieldValue[2]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[3]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[5]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});
	describe("Rule : DAT00008", function() {
		var dateFieldValue = ["02.12","09.1212","11.2","9.200","121211","13.00" ], 
			dateFormatInput = "MM.JJ,MM.JJJJ",
			dateFormatOutput = "MM.JJJJ", 
			dateRange = "";
                                     
		it("should validate the date '"+dateFieldValue[0]+ "' because it is in MM.JJ format", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("02.2012");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in MM.JJJJ format", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09.1212");
		});
		
		it("should not validate the date '"+dateFieldValue[2]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[3]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[5]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});
	describe("Rule : DAT00013", function() {
		var dateFieldValue = ["0212","9.8.","9.12.","30.9.","112","7.7","5.12","12.5","3312","9.13.","32.7."], //,"121211","13.00" ], 
			dateFormatInput = "TTMM,T.M.,T.MM.,TT.M.",
			dateFormatOutput = "TT.MM.", 
			dateRange = "";

		it("should validate the date '"+dateFieldValue[0]+ "' because it is in TTMM format", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("02.12.");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in T.M. format", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09.08.");
		});
		it("should validate the date '"+dateFieldValue[2]+ "'  because it is in T.MM. format", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09.12.");
		});
		it("should validate the date '"+dateFieldValue[3]+ "'  because it is in TT.M. format", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("30.09.");
		});
		
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[5]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[6]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[6], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[7]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[7], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[8]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[8], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[9]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[9], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[10]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[10], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});
	describe("Rule : DAT00007", function() {
		var dateFieldValue = ["2/12","9/1990","10/00","9/1212","5/2014" ]//"12/12.","9.3000","112","7.7","5.12","12.5","3312","9.13.","32.7."], //,"121211","13.00" ], 
			dateFormatInput = "M/JJ,M/JJJJ",
			dateFormatOutput = "MM/JJJJ", 
			dateRange = "199001:TODAYM";
		it("should validate the date '"+dateFieldValue[0]+ "' because it is in MM/JJ format and within date range '" +dateRange +"'", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("02/2012");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in M/JJJJ format and within date range '" +dateRange +"'", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09/1990");
		});
	
		it("should not validate the date '"+dateFieldValue[2]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[3]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong date range");
		});
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong date range");
		});
	});
	describe("Rule : DAT00009", function() {
		var dateFieldValue = ["12121212","111100", "9.9.12","1.1.2013","9.9.2","12122014","12.12.1","32122000","12131200" ], 
			dateFormatInput = "TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ",
			dateFormatOutput = "TT.MM.JJJJ", 
			dateRange = "<=TODAYE";

		it("should validate the date '"+dateFieldValue[0]+ "' because it is in TTMMJJJJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("12.12.1212");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in TTMMJJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("11.11.2000");
		});
		
		it("should validate the date '"+dateFieldValue[2]+ "'  because it is in T.M.JJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09.09.2012");
		});
		it("should validate the date '"+dateFieldValue[3]+ "'  because it is in T.M.JJJJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("01.01.2013");
		});
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[5]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("should be <= today date");
		});
		it("should not validate the date '"+dateFieldValue[6]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[6], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[7]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[7], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[8]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[8], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});
   describe("Rule : DAT00011", function() {
		var dateFieldValue = ["12092013","120913", "9.9.13","9.9.2013","9.9.2","12122014","12.12.1","32122000","12131200" ], 
			dateFormatInput = "TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ",
			dateFormatOutput = "TT.MM.JJJJ", 
			dateRange = "TODAYE:TODAYE+6M";

		it("should validate the date '"+dateFieldValue[0]+ "' because it is in TTMMJJJJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("12.09.2013");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in TTMMJJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("12.09.2013");
		});
		
		it("should validate the date '"+dateFieldValue[2]+ "'  because it is in T.M.JJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09.09.2013");
		});
		it("should validate the date '"+dateFieldValue[3]+ "'  because it is in T.M.JJJJ format and within the date range '"+dateRange+"'", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("09.09.2013");
		});
		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[5]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong date range");
		});
		it("should not validate the date '"+dateFieldValue[6]+ "' because it is not in one of the above dateformat and the range", function(){
		var result = validateDate(dateFieldValue[6], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[7]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[7], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[8]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[8], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});
	describe("Rule : DAT00012", function() {
		var dateFieldValue = ["12121212","1.1.1100", "01.12.1201","9.9.2","12121","12.12.1","32.12.2000","12.13.2000" ], 
			dateFormatInput = "TTMMJJJJ,T.M.JJJJ,TT.MM.JJJJ",
			dateFormatOutput = "TT.MM.JJJJ", 
			dateRange = "";
 
		it("should validate the date '"+dateFieldValue[0]+ "' because it is in TTMMJJJJ format", function(){
		var result = validateDate(dateFieldValue[0], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("12.12.1212");
		});
		
		it("should validate the date '"+dateFieldValue[1]+ "'  because it is in T.M.JJJJ format", function(){
		var result = validateDate(dateFieldValue[1], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("01.01.1100");
		});
		
		it("should validate the date '"+dateFieldValue[2]+ "'  because it is in TT.MM.JJJJ format", function(){
		var result = validateDate(dateFieldValue[2], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("01.12.1201");
		});
	
		it("should not validate the date '"+dateFieldValue[3]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[3], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[4]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[4], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[5]+ "' because it is not in one of the above dateformat", function(){
		var result = validateDate(dateFieldValue[5], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});

		it("should not validate the date '"+dateFieldValue[6]+ "' because the date(TT) value is wrong", function(){
		var result = validateDate(dateFieldValue[6], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
		it("should not validate the date '"+dateFieldValue[7]+ "' because the month(MM) value is wrong", function(){
		var result = validateDate(dateFieldValue[7], dateFormatInput, dateFormatOutput , dateRange) ;
		 expect(result).toBe("wrong format");
		});
	});
});