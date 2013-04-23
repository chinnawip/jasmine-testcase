describe("Amount Validation", function() {
   describe("Rule : ADV0200", function() {	
		var fieldVal = "1",
			beforeComma = 2,
            afterComma = 0,
            amountRange = ">0",
			plus = "+",
			minus = "",
			format = "99";
                     	
		it("should validate the amount '"+fieldVal+"' should be >0", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("01");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' becasue it should be >0", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});

	describe("Rule : ADV0500", function() {	
		var fieldVal = "1",
			beforeComma = 5,
            afterComma = 0,
            amountRange = ">0",
			plus = "+",
			minus = "",
			format = "99999";
                     	
		it("should validate the amount '"+fieldVal+"' should be >0", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00001");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' becasue it should be >0", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});

	describe("Rule : BTRM0100", function() {	
		var fieldVal = "1",
			beforeComma = 1,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});

	describe("Rule : BTRM0101", function() {	
		var fieldVal = "1,1",
			beforeComma = 1,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("11");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0102", function() {
		var fieldVal = "1,11",
			beforeComma = 1,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("111");
		});
		var fieldVal1 = "1,234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0104", function() {
		var fieldVal = "1,1111",
			beforeComma = 1,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("11111");
		});
		var fieldVal1 = "1,23456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	 
     describe("Rule : BTRM0106", function() {
		var fieldVal = "1,111111",
			beforeComma = 1,
            afterComma = 6,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9,999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1111111");
		});
		var fieldVal1 = "1,2345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});             
	describe("Rule : BTRM0107", function() {
		var fieldVal = "1,1234567",
			beforeComma = 1,
            afterComma = 7,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9,9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("11234567");
		});
		var fieldVal1 = "1,12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});                        
 	describe("Rule : BTRM0200", function() {
		var fieldVal = "12",
			beforeComma = 2,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});         
       
     describe("Rule : BTRM0201", function() {
		var fieldVal = "12,1",
			beforeComma = 2,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("121");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	 describe("Rule : BTRM0202", function() {
		var fieldVal = "12,12",
			beforeComma = 2,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1212");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0205", function() {
		var fieldVal = "12,12345",
			beforeComma = 2,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1212345");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0207", function() {
		var fieldVal = "12,1234567",
			beforeComma = 2,
            afterComma = 7,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99,9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("121234567");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0208", function() {
		var fieldVal = "12,12345678",
			beforeComma = 2,
            afterComma = 8,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99,99999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1212345678");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0300", function() {
		var fieldVal = "123",
			beforeComma = 3,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0301", function() {
		var fieldVal = "123,1",
			beforeComma = 3,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1231");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0302", function() {
		var fieldVal = "123,12",
			beforeComma = 3,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12312");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0303", function() {
		var fieldVal = "123,123",
			beforeComma = 3,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123123");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0304", function() {
		var fieldVal = "123,1234",
			beforeComma = 3,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1231234");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0305", function() {
		var fieldVal = "123,12345",
			beforeComma = 3,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12312345");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	}); 
	describe("Rule : BTRM0308", function() {
		var fieldVal = "123,12345678",
			beforeComma = 3,
            afterComma = 8,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999,99999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12312345678");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});                                    
	describe("Rule : BTRM0309", function() {
		var fieldVal = "123,123456789",
			beforeComma = 3,
            afterComma = 9,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999,999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123123456789");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0400", function() {
		var fieldVal = "1234",
			beforeComma = 4,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0402", function() {
		var fieldVal = "1234,12",
			beforeComma = 4,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123412");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0404", function() {
		var fieldVal = "1234,1234",
			beforeComma = 4,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341234");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0407", function() {
		var fieldVal = "1234,1234567",
			beforeComma = 4,
            afterComma = 7,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999,9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341234567");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0500", function() {
		var fieldVal = "12345",
			beforeComma = 5,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0502", function() {
		var fieldVal = "12345,12",
			beforeComma = 5,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234512");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0503", function() {
		var fieldVal = "12345,123",
			beforeComma = 5,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345123");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});	
	describe("Rule : BTRM0504", function() {
		var fieldVal = "12345,1234",
			beforeComma = 5,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123451234");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0600", function() {
		var fieldVal = "123456",
			beforeComma = 6,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0602", function() {
		var fieldVal = "123456,12",
			beforeComma = 6,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345612");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0604", function() {
		var fieldVal = "123456,1234",
			beforeComma = 6,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234561234");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0605", function() {
		var fieldVal = "123456,12345",
			beforeComma = 6,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345612345");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0608", function() {
		var fieldVal = "123456,12345678",
			beforeComma = 6,
            afterComma = 8,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999,99999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345612345678");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0700", function() {
		var fieldVal = "1234567",
			beforeComma = 7,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567");
		});
		var fieldVal1 = "12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0702", function() {
		var fieldVal = "1234567,12",
			beforeComma = 7,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456712");
		});
		var fieldVal1 = "12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0800", function() {
		var fieldVal = "12345678",
			beforeComma = 8,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345678");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0801", function() {
		var fieldVal = "12345678,1",
			beforeComma = 8,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456781");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0802", function() {
		var fieldVal = "12345678,12",
			beforeComma = 8,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567812");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0807", function() {
		var fieldVal = "12345678,1234567",
			beforeComma = 8,
            afterComma = 7,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999999,9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456781234567");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0900", function() {
		var fieldVal = "123456789",
			beforeComma = 9,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456789");
		});
		var fieldVal1 = "1234567891";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0902", function() {
		var fieldVal = "123456789,12",
			beforeComma = 9,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345678912");
		});
		var fieldVal1 = "1234567891";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0905", function() {
		var fieldVal = "123456789,12345",
			beforeComma = 9,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345678912345");
		});
		var fieldVal1 = "1234567891";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM0906", function() {
		var fieldVal = "123456789,123456",
			beforeComma = 9,
            afterComma = 6,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "999999999,999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456789123456");
		});
		var fieldVal1 = "1234567891";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM1000", function() {
		var fieldVal = "1234567891",
			beforeComma = 10,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567891");
		});
		var fieldVal1 = "12345678912";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM1002", function() {
		var fieldVal = "1234567891,12",
			beforeComma = 10,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456789112");
		});
		var fieldVal1 = "12345678912";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM1005", function() {
		var fieldVal = "1234567891,12345",
			beforeComma = 10,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999999999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456789112345");
		});
		var fieldVal1 = "12345678912";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM1100", function() {
		var fieldVal = "12345678912",
			beforeComma = 11,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345678912");
		});
		var fieldVal1 = "123456789123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM1102", function() {
		var fieldVal = "12345678912,12",
			beforeComma = 11,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567891212");
		});
		var fieldVal1 = "123456789123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM1300", function() {
		var fieldVal = "1234567891234",
			beforeComma = 13,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "9999999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567891234");
		});
		var fieldVal1 = "12345678912345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTRM1400", function() {
		var fieldVal = "12345678912345",
			beforeComma = 14,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "",
			format = "99999999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345678912345");
		});
		var fieldVal1 = "123456789123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should not validate the amount '"+ fieldVal2+"' becasue miuns(-) value is not allowed", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
	});
	describe("Rule : BTR00100", function() {
		var fieldVal = "1",
			beforeComma = 1,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-2";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("C");
		});
		var fieldVal3 = "+2";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("2");
		});
	});		
	describe("Rule : BTR00101", function() {
		var fieldVal = "1,1",
			beforeComma = 1,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("11");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B1");
		});
		var fieldVal3 = "+1,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("11");
		});
	});
	describe("Rule : BTR00102", function() {
		var fieldVal = "1,12",
			beforeComma = 1,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("112");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B12");
		});
		var fieldVal3 = "+1,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("112");
		});
	});
	describe("Rule : BTR00103", function() {
		var fieldVal = "1,123",
			beforeComma = 1,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1123");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B123");
		});
		var fieldVal3 = "+1,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1123");
		});
	});
	describe("Rule : BTR00104", function() {
		var fieldVal = "1,1234",
			beforeComma = 1,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("11234");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,1234";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B1234");
		});
		var fieldVal3 = "+1,1234";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("11234");
		});
	});
	describe("Rule : BTR00105", function() {
		var fieldVal = "1,12345",
			beforeComma = 1,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("112345");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12345";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B12345");
		});
		var fieldVal3 = "+1,12345";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("112345");
		});
	});
	describe("Rule : BTR00106", function() {
		var fieldVal = "1,123456",
			beforeComma = 1,
            afterComma = 6,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9,999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1123456");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,123456";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B123456");
		});
		var fieldVal3 = "+1,123456";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1123456");
		});
	});
	describe("Rule : BTR00112", function() {
		var fieldVal = "1,123456789012",
			beforeComma = 1,
            afterComma = 12,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9,999999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1123456789012");
		});
		var fieldVal1 = "12";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,123456789012";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B123456789012");
		});
		var fieldVal3 = "+1,123456789012";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1123456789012");
		});
	});
	describe("Rule : BTR00200", function() {
		var fieldVal = "12",
			beforeComma = 2,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2");
		});
		var fieldVal3 = "+12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12");
		});
	});
	describe("Rule : BTR00201", function() {
		var fieldVal = "12,1",
			beforeComma = 2,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("121");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B21");
		});
		var fieldVal3 = "+12,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("121");
		});
	});
	describe("Rule : BTR00202", function() {
		var fieldVal = "12,12",
			beforeComma = 2,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1212");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B212");
		});
		var fieldVal3 = "+12,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1212");
		});
	});
	describe("Rule : BTR00203", function() {
		var fieldVal = "12,123",
			beforeComma = 2,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12123");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2123");
		});
		var fieldVal3 = "+12,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12123");
		});
	});
	describe("Rule : BTR00205", function() {
		var fieldVal = "12,12345",
			beforeComma = 2,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1212345");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12,12345";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B212345");
		});
		var fieldVal3 = "+12,12345";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1212345");
		});
	});
	describe("Rule : BTR00300", function() {
		var fieldVal = "123",
			beforeComma = 3,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23");
		});
		var fieldVal3 = "+123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123");
		});
	});
	describe("Rule : BTR00301", function() {
		var fieldVal = "123,1",
			beforeComma = 3,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1231");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B231");
		});
		var fieldVal3 = "+123,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1231");
		});
	});
	describe("Rule : BTR00302", function() {
		var fieldVal = "123,12",
			beforeComma = 3,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12312");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2312");
		});
		var fieldVal3 = "+123,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12312");
		});
	});
	describe("Rule : BTR00303", function() {
		var fieldVal = "123,123",
			beforeComma = 3,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123123");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23123");
		});
		var fieldVal3 = "+123,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123123");
		});
	});
	describe("Rule : BTR00304", function() {
		var fieldVal = "123,1234",
			beforeComma = 3,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1231234");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123,1234";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B231234");
		});
		var fieldVal3 = "+123,1234";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1231234");
		});
	});
	describe("Rule : BTR00306", function() {
		var fieldVal = "123,123456",
			beforeComma = 3,
            afterComma = 6,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999,999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123123456");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123,123456";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23123456");
		});
		var fieldVal3 = "+123,123456";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123123456");
		});
	});
	describe("Rule : BTR00308", function() {
		var fieldVal = "123,12345678",
			beforeComma = 3,
            afterComma = 8,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999,99999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12312345678");
		});
		var fieldVal1 = "1234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123,12345678";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2312345678");
		});
		var fieldVal3 = "+123,12345678";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12312345678");
		});
	});
	describe("Rule : BTR00400", function() {
		var fieldVal = "1234",
			beforeComma = 4,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B234");
		});
		var fieldVal3 = "+1234";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234");
		});
	});
	describe("Rule : BTR00401", function() {
		var fieldVal = "1234,1",
			beforeComma = 4,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2341");
		});
		var fieldVal3 = "+1234,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341");
		});
	});
	describe("Rule : BTR00402", function() {
		var fieldVal = "1234,12",
			beforeComma = 4,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123412");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23412");
		});
		var fieldVal3 = "+1234,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123412");
		});
	});
	describe("Rule : BTR00403", function() {
		var fieldVal = "1234,123",
			beforeComma = 4,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234123");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B234123");
		});
		var fieldVal3 = "+1234,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234123");
		});
	});
	describe("Rule : BTR00404", function() {
		var fieldVal = "1234,1234",
			beforeComma = 4,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341234");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234,1234";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2341234");
		});
		var fieldVal3 = "+1234,1234";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341234");
		});
	});
	describe("Rule : BTR00405", function() {
		var fieldVal = "1234,12345",
			beforeComma = 4,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123412345");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234,12345";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23412345");
		});
		var fieldVal3 = "+1234,12345";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123412345");
		});
	});
	describe("Rule : BTR00407", function() {
		var fieldVal = "1234,1234567",
			beforeComma = 4,
            afterComma = 7,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999,9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341234567");
		});
		var fieldVal1 = "12345";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234,1234567";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2341234567");
		});
		var fieldVal3 = "+1234,1234567";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12341234567");
		});
	});
	describe("Rule : BTR00500", function() {
		var fieldVal = "12345",
			beforeComma = 5,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12345";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2345");
		});
		var fieldVal3 = "+12345";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345");
		});
	});
	describe("Rule : BTR00501", function() {
		var fieldVal = "12345,1",
			beforeComma = 5,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123451");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12345,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23451");
		});
		var fieldVal3 = "+12345,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123451");
		});
	});
	describe("Rule : BTR00502", function() {
		var fieldVal = "12345,12",
			beforeComma = 5,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234512");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12345,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B234512");
		});
		var fieldVal3 = "+12345,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234512");
		});
	});
	describe("Rule : BTR00503", function() {
		var fieldVal = "12345,123",
			beforeComma = 5,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345123");
		});
		var fieldVal1 = "123456";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-12345,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2345123");
		});
		var fieldVal3 = "+12345,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345123");
		});
	});
	describe("Rule : BTR00600", function() {
		var fieldVal = "123456",
			beforeComma = 6,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123456";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23456");
		});
		var fieldVal3 = "+123456";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456");
		});
	});
	describe("Rule : BTR00601", function() {
		var fieldVal = "123456,1",
			beforeComma = 6,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234561");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123456,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B234561");
		});
		var fieldVal3 = "+123456,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234561");
		});
	});
	describe("Rule : BTR00602", function() {
		var fieldVal = "123456,12",
			beforeComma = 6,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345612");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123456,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2345612");
		});
		var fieldVal3 = "+123456,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345612");
		});
	});
	describe("Rule : BTR00603", function() {
		var fieldVal = "123456,123",
			beforeComma = 6,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456123");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123456,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23456123");
		});
		var fieldVal3 = "+123456,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456123");
		});
	});
	describe("Rule : BTR00608", function() {
		var fieldVal = "123456,12345678",
			beforeComma = 6,
            afterComma = 8,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999,99999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345612345678");
		});
		var fieldVal1 = "1234567";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-123456,12345678";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2345612345678");
		});
		var fieldVal3 = "+123456,12345678";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345612345678");
		});
	});
	describe("Rule : BTR00700", function() {
		var fieldVal = "1234567",
			beforeComma = 7,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567");
		});
		var fieldVal1 = "12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234567";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B234567");
		});
		var fieldVal3 = "+1234567";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567");
		});
	});
	describe("Rule : BTR00701", function() {
		var fieldVal = "1234567,1",
			beforeComma = 7,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345671");
		});
		var fieldVal1 = "12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234567,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B2345671");
		});
		var fieldVal3 = "+1234567,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12345671");
		});
	});
	describe("Rule : BTR00702", function() {
		var fieldVal = "1234567,12",
			beforeComma = 7,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456712");
		});
		var fieldVal1 = "12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234567,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B23456712");
		});
		var fieldVal3 = "+1234567,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("123456712");
		});
	});
	describe("Rule : BTR00703", function() {
		var fieldVal = "1234567,123",
			beforeComma = 7,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567123");
		});
		var fieldVal1 = "12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1234567,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("B234567123");
		});
		var fieldVal3 = "+1234567,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1234567123");
		});
	});
	describe("Rule : BTR00800", function() {
		var fieldVal = "1",
			beforeComma = 8,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000001");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A0000001");
		});
		var fieldVal3 = "+1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000001");
		});
	});
	describe("Rule : BTR00801", function() {
		var fieldVal = "1,1",
			beforeComma = 8,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000011");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A00000011");
		});
		var fieldVal3 = "+1,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000011");
		});
	});
	describe("Rule : BTR00802", function() {
		var fieldVal = "1,12",
			beforeComma = 8,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000112");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A000000112");
		});
		var fieldVal3 = "+1,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000112");
		});
	});
	describe("Rule : BTR00803", function() {
		var fieldVal = "1,123",
			beforeComma = 8,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000001123");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A0000001123");
		});
		var fieldVal3 = "+1,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000001123");
		});
	});
	describe("Rule : BTR00805", function() {
		var fieldVal = "1,12345",
			beforeComma = 8,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000112345");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12345";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A000000112345");
		});
		var fieldVal3 = "+1,12345";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000112345");
		});
	});
	describe("Rule : BTR00807", function() {
		var fieldVal = "1,1234567",
			beforeComma = 8,
            afterComma = 7,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999999,9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000011234567");
		});
		var fieldVal1 = "123456789";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,1234567";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A00000011234567");
		});
		var fieldVal3 = "+1,1234567";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000011234567");
		});
	});
	describe("Rule : BTR00900", function() {
		var fieldVal = "1",
			beforeComma = 9,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000001");
		});
		var fieldVal1 = "1234567890";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A00000001");
		});
		var fieldVal3 = "+1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000001");
		});
	});
	describe("Rule : BTR00901", function() {
		var fieldVal = "1,1",
			beforeComma = 9,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000011");
		});
		var fieldVal1 = "1234567890";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A000000011");
		});
		var fieldVal3 = "+1,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000011");
		});
	});
	describe("Rule : BTR00902", function() {
		var fieldVal = "1,12",
			beforeComma = 9,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000112");
		});
		var fieldVal1 = "1234567890";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A0000000112");
		});
		var fieldVal3 = "+1,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000112");
		});
	});
	describe("Rule : BTR00903", function() {
		var fieldVal = "1,123",
			beforeComma = 9,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000001123");
		});
		var fieldVal1 = "1234567890";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A00000001123");
		});
		var fieldVal3 = "+1,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000001123");
		});
	});
	describe("Rule : BTR00905", function() {
		var fieldVal = "1,12345",
			beforeComma = 9,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "999999999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000112345");
		});
		var fieldVal1 = "1234567890";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12345";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A0000000112345");
		});
		var fieldVal3 = "+1,12345";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000112345");
		});
	});
	describe("Rule : BTR01000", function() {
		var fieldVal = "1",
			beforeComma = 10,
            afterComma = 0,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000001");
		});
		var fieldVal1 = "12345678901";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A000000001");
		});
		var fieldVal3 = "+1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000001");
		});
	});
	describe("Rule : BTR01001", function() {
		var fieldVal = "1,1",
			beforeComma = 10,
            afterComma = 1,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999999,9";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000011");
		});
		var fieldVal1 = "12345678901";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,1";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A0000000011");
		});
		var fieldVal3 = "+1,1";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000011");
		});
	});
	describe("Rule : BTR01002", function() {
		var fieldVal = "1,12",
			beforeComma = 10,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000000112");
		});
		var fieldVal1 = "12345678901";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A00000000112");
		});
		var fieldVal3 = "+1,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000000112");
		});
	});
	describe("Rule : BTR01003", function() {
		var fieldVal = "1,123",
			beforeComma = 10,
            afterComma = 3,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999999,999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000001123");
		});
		var fieldVal1 = "12345678901";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,123";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A000000001123");
		});
		var fieldVal3 = "+1,123";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000001123");
		});
	});
	describe("Rule : BTR01004", function() {
		var fieldVal = "1,1234",
			beforeComma = 10,
            afterComma = 4,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999999,9999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000011234");
		});
		var fieldVal1 = "12345678901";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,1234";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A0000000011234");
		});
		var fieldVal3 = "+1,1234";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("00000000011234");
		});
	});
	describe("Rule : BTR01005", function() {
		var fieldVal = "1,12345",
			beforeComma = 10,
            afterComma = 5,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999999,99999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000000112345");
		});
		var fieldVal1 = "12345678901";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12345";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A00000000112345");
		});
		var fieldVal3 = "+1,12345";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000000112345");
		});
	});
	describe("Rule : BTR01102", function() {
		var fieldVal = "1,12",
			beforeComma = 11,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "99999999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000000112");
		});
		var fieldVal1 = "123456789012";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A000000000112");
		});
		var fieldVal3 = "+1,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0000000000112");
		});
	});
	describe("Rule : BTR01302", function() {
		var fieldVal = "1,12",
			beforeComma = 13,
            afterComma = 2,
            amountRange = "",
			plus = "+",
			minus = "-",
			format = "9999999999999,99";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000000000112");
		});
		var fieldVal1 = "12345678901234";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1,12";
		it("should validate the amount '"+ fieldVal2+"' ", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A00000000000112");
		});
		var fieldVal3 = "+1,12";
		it("should validate the amount '"+ fieldVal3+"' ", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("000000000000112");
		});
	});
	describe("Rule : BTRLVE01", function() {
		var fieldVal = "12",
			beforeComma = 2,
            afterComma = 0,
            amountRange = "0:23",
			plus = "+",
			minus = "-",
			format = "99";
                     	
		it("should validate the amount '"+fieldVal+"' because it is in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
		var fieldVal3 = "+24";
		it("should not validate the amount '"+ fieldVal3+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
	});
	describe("Rule : BTRLVE02", function() {
		var fieldVal = "12",
			beforeComma = 2,
            afterComma = 0,
            amountRange = "0:59",
			plus = "+",
			minus = "-",
			format = "99";
                     	
		it("should validate the amount '"+fieldVal+"' because it is in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("12");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
		var fieldVal3 = "+61";
		it("should not validate the amount '"+ fieldVal3+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
	});
	describe("Rule : BTRLVE03", function() {
		var fieldVal = "1",
			beforeComma = 2,
            afterComma = 0,
            amountRange = "0:24",
			plus = "+",
			minus = "-",
			format = "99";
                     	
		it("should validate the amount '"+fieldVal+"' because it is in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("01");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
		var fieldVal3 = "+25";
		it("should not validate the amount '"+ fieldVal3+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
	});
	describe("Rule : BTRLVF01", function() {
		var fieldVal = "9",
			beforeComma = 2,
            afterComma = 0,
            amountRange = "0:10",
			plus = "+",
			minus = "-",
			format = "99";
                     	
		it("should validate the amount '"+fieldVal+"' because it is in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("09");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
		var fieldVal3 = "+11";
		it("should not validate the amount '"+ fieldVal3+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
	});
	describe("Rule : BTRN0700", function() {
		var fieldVal = "-9",
			beforeComma = 7,
            afterComma = 0,
            amountRange = "<0",
			plus = "",
			minus = "-",
			format = "9999999";
                     	
		it("should validate the amount '"+fieldVal+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("A000009");
		});
		var fieldVal1 = "-12345678";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "+1";
		it("should not validate the amount '"+ fieldVal2+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		
	});
	describe("Rule : BTRW0202", function() {
		var fieldVal = "9,1",
			beforeComma = 2,
            afterComma = 2,
            amountRange = "0:99,99",
			plus = "+",
			minus = "-",
			format = "99,99";
                     	
		it("should validate the amount '"+fieldVal+"' because it is in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("0910");
		});
		var fieldVal1 = "123";
		it("should not validate the amount '"+fieldVal1+"' because it should be in '"+format+"' format", function(){
		 var result = validateAmount(fieldVal1,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in '"+format+"' format");
		});
		var fieldVal2 = "-1";
		it("should not validate the amount '"+ fieldVal2+"' because it is not in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal2,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("should be in range "+amountRange);
		});
		var fieldVal3 = "+11";
		it("should validate the amount '"+ fieldVal3+"' because it is in range '"+amountRange+"'", function(){
		 var result = validateAmount(fieldVal3,beforeComma,afterComma,amountRange,plus,minus,format);  
		 expect(result).toBe("1100");
		});
	});
});  

