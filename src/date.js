		/**
		* Get start Range and end range date
		*
		* @param {String} dtRangeValue
		* @param {String} startEndFlag
		* @return an error string if validation failed, otherwise returns the oppropriate value.
		*/
		getDateRange = function(dtRangeValue,startEndFlag){
			var dateRangeOut;
			var date = new Date();
			var todayDateTemp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
			var pattern = new RegExp("^[0-9]{6}$");

			if (pattern.test(dtRangeValue)){
				if(dtRangeValue.length == 6){
					if(startEndFlag =='S'){
						return  new Date(dtRangeValue.substr(4,2) +"."+"01." + dtRangeValue.substr(0,4));
						//return  new Date(dtRangeValue.substr(0,4),dtRangeValue.substr(4,2),1);
					}else{
						return  new Date(dtRangeValue.substr(4,2) +"."+todayDateTemp.getDate()+'.'+dtRangeValue.substr(0,4));
						//return  new Date(dtRangeValue.substr(0,4),dtRangeValue.substr(4,2),0);
					}
				}else{
					return "formatError";
				}
			}else if (dtRangeValue == "TODAYM" || dtRangeValue == "HEUTM"){
					if(startEndFlag =='S'){
						return  new Date((todayDateTemp.getMonth()+1) + '.' + "01"+'.'+todayDateTemp.getFullYear());
					}else{
						return  new Date((todayDateTemp.getMonth()+1)+'.'+todayDateTemp.getDate()+'.' + todayDateTemp.getFullYear());
					}
			}else if (dtRangeValue == "TODAYE" || dtRangeValue == "HEUTE"){
					var todayDate = new Date();
					return new Date((todayDate.getMonth()+1) + '.' +todayDate.getDate()+'.'+ todayDate.getFullYear());
			}else if(dtRangeValue.indexOf("+") >=0 ){
				var addMonthStr = dtRangeValue.substr(dtRangeValue.indexOf('+')+1);
				var addMonthStrTemp ="";
				for(var i= 0;i< addMonthStr.length;i++){
					if(addMonthStr[i] >0 && addMonthStr[i] <=9){
						addMonthStrTemp = addMonthStrTemp + addMonthStr[i]; 
					}
				}
				var addMonthValue = parseInt(addMonthStrTemp);
				if (dtRangeValue.indexOf("TODAYM") >= 0 || dtRangeValue.indexOf("HEUTM") >=0 ){
					if(startEndFlag =='S'){
						return  new Date(((todayDateTemp.getMonth()+1)+addMonthValue) + '.' + "01"+'.'+todayDateTemp.getFullYear());
					}else{
						return  new Date(((todayDateTemp.getMonth()+1)+addMonthValue)+'.'+todayDateTemp.getDate()+'.' + todayDateTemp.getFullYear());
					}
				}else if (dtRangeValue.indexOf("TODAYE") >= 0 || dtRangeValue.indexOf("HEUTE")>=0){
					var todayDate1 = new Date();
					return new Date(((todayDate1.getMonth()+1)+addMonthValue) + '.' +todayDate1.getDate()+'.'+ todayDate1.getFullYear());
				}
			}else{
				return "formatError";
			}
		},
		/**
		* Validate date range 
		*
		* @param {String} fieldValueDate
		* @param {String} dtRangeFormat
		* @return an error string if validation failed
		*/
		validateDateRange = function(fieldValueDate, dtRangeFormat){
			var todayDate = new Date();
			if(dtRangeFormat.indexOf(":")>=0){
				var dateRangeArray = dtRangeFormat.split(":");
				var rangeStart = getDateRange(dateRangeArray[0],'S');
				var rangeEnd = getDateRange(dateRangeArray[1],'E');
				if(rangeStart == "formatError" || rangeEnd == "formatError"){
					return "wrong range format";
				}

				//var finalResultDate = new Date(fieldValueDate.substr(0,2)+'.'+"01."+fieldValueDate.substr(3,4));
				if (!(fieldValueDate >= rangeStart && fieldValueDate <= rangeEnd))
				{
					return "wrong date range" ;
				}
			}else if(dtRangeFormat == "<=HEUTE" || dtRangeFormat == "<HEUTE" || dtRangeFormat == ">=HEUTE" || dtRangeFormat == ">HEUTE"  ||
					dtRangeFormat == "<=TODAYE" || dtRangeFormat == "<TODAYE" || dtRangeFormat == ">=TODAYE" || dtRangeFormat == ">TODAYE"  )
			{
					if (dtRangeFormat.indexOf("<=") >=0){
						if(!(fieldValueDate <= todayDate)){
							return "should be <= today date" ;
						}
					}else if (dtRangeFormat.indexOf("<") >=0){
						if(!(fieldValueDate < todayDate)){
							return "should be < today date" ;
						}
					}else if (dtRangeFormat.indexOf(">=") >=0){
						if(!(fieldValueDate >= todayDate)){
							return "should be >= today date" ;
						}
					}else if (dtRangeFormat.indexOf(">") >=0){
						if(!(fieldValueDate > todayDate)){
								return "should be > today date" ;
						}
					}
			}
		},
		/**
		* Validate date rules
		*
		* @param {String} dateFieldValue
		* @param {String} dateFormatInput
		* @param {String} dateFormatOutput
		* @param {String} dateRange		
		* @return an error string if validation failed
		*/
		validateDate = function(dateFieldValue, dateFormatInput, dateFormatOutput , dateRange) {
			var finalResult = "";
			var dateFormatInputArray = dateFormatInput.split(',');
			var regex = "";
			var regexTemp = "";
			
			for (i = 0; i < dateFormatInputArray.length; i++) {
				var dateFormatInputLength = parseInt(dateFormatInputArray[i].length);
				var dateFormatTempOld = "";
				var dateFormatTemp = "";
				for (var j = 0; j < dateFormatInputLength; j++){
					    	if (dateFormatInputArray[i].charAt(j) == dateFormatTempOld || dateFormatTempOld ==""){
					    		dateFormatTempOld = dateFormatInputArray[i].charAt(j);
					    		dateFormatTemp = dateFormatTemp + dateFormatInputArray[i].charAt(j);
					    	}else{
					    	 	dateFormatTempOld = dateFormatInputArray[i].charAt(j);
					    	 	dateFormatTemp = dateFormatTemp +','+dateFormatInputArray[i].charAt(j);
					    	 }
				}  //for j loop
			  	var dateFormatArrayTemp = dateFormatTemp.split(",");
				  regexTemp = "("; // for inner bracket start
				   for( var k = 0; k < dateFormatArrayTemp.length; k++){
			//	   	alert("dateFormatArrayTemp :"+dateFormatArrayTemp[k]);
				   		 switch (dateFormatArrayTemp[k]){
					    	 	case "TT" :
					    	 		regexTemp = regexTemp + "(0[1-9]|[12][0-9]|3[01])";
					    	 		break;
					    	 	case "MM" :
							 		regexTemp = regexTemp + "(0[1-9]|1[012])";
					    	 		break;
					    	 	case "T" :
							 		regexTemp = regexTemp + "[1-9]";
					    	 		break;
					    	 	case "M" :
							 		regexTemp = regexTemp + "[1-9]";
					    	 		break;
								case "JJJJ" :
							 		regexTemp = regexTemp + "[0-9]{4}";
					    	 		break;
					    	 	case "JJ" :
							 		regexTemp = regexTemp + "[0-9]{2}";
					    	 		break;	
					    	 	case "." :
							 		regexTemp = regexTemp + "[\\.]";
					    	 		break;	
					    	 	case "/" :
							 		regexTemp = regexTemp + "[\\/]";
					    	 		break;	
					    	 }
				   }
					regex = regex + regexTemp + ")|";
				} //for i loop
				regex = regex.substr(0,(regex.length - 1));
				regex = '^(' + regex + ')$';


			if(dateFormatInput != "") {
				var ex= regex;
				if(!ex) {
					alert("jqv:custom regex not found");
					return;
				}
				var pattern = new RegExp(ex);
				if (!pattern.test(dateFieldValue)) return "wrong format" ;
					if(dateFormatOutput == "TTMM") // DAT00003 DATUM  EIN=(TTMM,T.M.),AUS='TTMM'
					{
						if(dateFieldValue.indexOf('.')>=0)
						{
							finalResult = '0'+dateFieldValue.substr(0,1) + '0'+dateFieldValue.substr(2,1);
						} else{
							finalResult = 	dateFieldValue;
						}
					}else if(dateFormatOutput == "TTMMJJ") // DAT00004 DATUM  EIN=(TTMMJJ,T.M.JJ,TT.MM.JJ),AUS='TTMMJJ'
					{
						if(dateFieldValue.indexOf('.')==1)
						{
							finalResult = '0'+ dateFieldValue.substr(0,1) + '0'+ dateFieldValue.substr(2,1) +dateFieldValue.substr(4,2);
						}else if(dateFieldValue.indexOf('.')==2)
						{
							finalResult = dateFieldValue.substr(0,2) + dateFieldValue.substr(3,2) +dateFieldValue.substr(6,2);
						}else{
							finalResult = 	dateFieldValue;
						}
					}else if(dateFormatOutput == "TTMMJJJJ") // DAT00005 DATUM  EIN=(TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ),AUS='TTMMJJJJ'
					{
						var twoDigitYear;
						var fourDigitYear = "";
						if(dateFieldValue.length == 6 && dateFieldValue.indexOf('.')==1)
						{
							twoDigitYear = dateFieldValue.substr(4,2);
							if(twoDigitYear>49){
								fourDigitYear = "19"+twoDigitYear;
							}else{
								fourDigitYear = "20"+twoDigitYear;
							}
							finalResult = '0'+ dateFieldValue.substr(0,1) + '0'+ dateFieldValue.substr(2,1) +fourDigitYear;
						}else if(dateFieldValue.length == 8 && dateFieldValue.indexOf('.')==1)
						{
							finalResult = '0'+dateFieldValue.substr(0,1) + '0'+dateFieldValue.substr(2,1) +dateFieldValue.substr(4,4);
						}else if(dateFieldValue.length == 6)
						{
							twoDigitYear = dateFieldValue.substr(4,2);
							if(twoDigitYear>49){
								fourDigitYear = "19"+twoDigitYear;
							}else{
								fourDigitYear = "20"+twoDigitYear;
							}
							finalResult = dateFieldValue.substr(0,4) + fourDigitYear;
						}
						else{
							finalResult = 	dateFieldValue;
						}
					}else if(dateFormatOutput == "MMJJ") //DAT00006 DATUM  EIN=(MMJJ,M.JJ),AUS='MMJJ'
					{
						if(dateFieldValue.indexOf('.')>=0)
						{
							finalResult = '0'+dateFieldValue.substr(0,1) + dateFieldValue.substr(2,2);
						} else{
							finalResult = 	dateFieldValue;
						}
					}else if(dateFormatOutput == "MM/JJJJ") //DAT00007 DATUM EIN=(M/JJ,M/JJJJ),AUS='MM/JJJJ',ZEIT=(199001:HEUTM) 
					{
						if(dateFieldValue.length == 4 && dateFieldValue.indexOf('/')>=0)
						{
							twoDigitYear = dateFieldValue.substr(2,2);
							if(twoDigitYear>49){
								fourDigitYear = "19"+twoDigitYear;
							}else{
								fourDigitYear = "20"+twoDigitYear;
							}
							finalResult = '0' + dateFieldValue.substr(0,2) + fourDigitYear;
						} else{
							finalResult = 	'0' + dateFieldValue;
						}

						if (dateRange !=  ""){
							var dateRangeFormat = dateRange;
							var finalResultDate = new Date(finalResult.substr(0,2)+'.'+"01."+finalResult.substr(3,4));
							var errMsg = validateDateRange(finalResultDate, dateRangeFormat);
							if (errMsg != undefined){
								return errMsg;
							}
						}
					
					}else if(dateFormatOutput == "MM.JJJJ") //DAT00008 DATUM EIN=(MM.JJ,MM.JJJJ),AUS='MM.JJJJ' 
					{
						if(dateFieldValue.length == 5 && dateFieldValue.indexOf('.')>=0)
						{
							twoDigitYear = dateFieldValue.substr(3,2);
							if(twoDigitYear>49){
								fourDigitYear = "19"+twoDigitYear;
							}else{
								fourDigitYear = "20"+twoDigitYear;
							}
							finalResult = dateFieldValue.substr(0,2) + "."+ fourDigitYear;
						} else{
							finalResult = 	dateFieldValue;
						}
					}
					else if(dateFormatOutput == "TT.MM.JJJJ") // DAT00009 DATUM  EIN=(TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ),AUS=TT.MM.JJJJ, ZEIT=(<=HEUTE)
					{
						var twoDigitYear;
						var fourDigitYear = "";
						if(dateFieldValue.length == 6 && dateFieldValue.indexOf('.')==1)
						{
							twoDigitYear = dateFieldValue.substr(4,2);
							if(twoDigitYear>49){
								fourDigitYear = "19"+twoDigitYear;
							}else{
								fourDigitYear = "20"+twoDigitYear;
							}
							finalResult = '0'+ dateFieldValue.substr(0,1) +'.'+ '0'+ dateFieldValue.substr(2,1) +'.'+fourDigitYear;
						}else if(dateFieldValue.length == 8 && dateFieldValue.indexOf('.')==1)
						{
							finalResult = '0'+dateFieldValue.substr(0,1) + '.'+ '0'+dateFieldValue.substr(2,1) + '.' + dateFieldValue.substr(4,4);
						}else if(dateFieldValue.length == 6 && dateFieldValue.indexOf('.')< 0)
						{
							twoDigitYear = dateFieldValue.substr(4,2);
							if(twoDigitYear>49){
								fourDigitYear = "19"+twoDigitYear;
							}else{
								fourDigitYear = "20"+twoDigitYear;
							}
							finalResult = dateFieldValue.substr(0,2) +'.'+dateFieldValue.substr(2,2) + '.' + fourDigitYear;
						}else if(dateFieldValue.length == 8 && dateFieldValue.indexOf('.')<0)
						{
							finalResult = dateFieldValue.substr(0,2)+'.'+dateFieldValue.substr(2,2)+'.'+dateFieldValue.substr(4,4);
						}
						else{
							finalResult = 	dateFieldValue;
						}
						var dateRangeFormat = dateRange;
						// var todayDate = new Date();
						var finalresultArray = finalResult.split('.');
						var finalResultDate = new Date(finalresultArray[1] +'.'+finalresultArray[0] + '.' + finalresultArray[2]);

						var errMsg = validateDateRange(finalResultDate,dateRangeFormat);
						if (errMsg != undefined){
							return errMsg;
						}
					
					}
					// else if(dateFormatOutput == "TT.MM.JJJJ") // DAT00011 DATUM  EIN=(TTMMJJJJ,TTMMJJ,T.M.JJ,T.M.JJJJ),AUS=TT.MM.JJJJ, ZEIT=(HEUTE:HEUTE+6M)
					// {
					// 	var twoDigitYear;
					// 	var fourDigitYear = "";
					// 	if(dateFieldValue.length == 6 && dateFieldValue.indexOf('.')==1)
					// 	{
					// 		twoDigitYear = dateFieldValue.substr(4,2);
					// 		if(twoDigitYear>49){
					// 			fourDigitYear = "19"+twoDigitYear;
					// 		}else{
					// 			fourDigitYear = "20"+twoDigitYear;
					// 		}
					// 		finalResult = '0'+ dateFieldValue.substr(0,1) +'.'+ '0'+ dateFieldValue.substr(2,1) +'.'+fourDigitYear;
					// 	}else if(dateFieldValue.length == 8 && dateFieldValue.indexOf('.')==1)
					// 	{
					// 		finalResult = '0'+dateFieldValue.substr(0,1) + '.'+ '0'+dateFieldValue.substr(2,1) + '.' + dateFieldValue.substr(4,4);
					// 	}else if(dateFieldValue.length == 6)
					// 	{
					// 		twoDigitYear = dateFieldValue.substr(4,2);
					// 		if(twoDigitYear>49){
					// 			fourDigitYear = "19"+twoDigitYear;
					// 		}else{
					// 			fourDigitYear = "20"+twoDigitYear;
					// 		}
					// 		finalResult = dateFieldValue.substr(0,2) +'.'+dateFieldValue.substr(2,2) + '.' + fourDigitYear;
					// 	}
					// 	else{
					// 		finalResult = 	dateFieldValue.substr(0,2) +'.'+dateFieldValue.substr(2,2) + '.' + dateFieldValue.substr(4,4);
					// 	}
					// 	var finalresultArray = finalResult.split('.');
					// 	var finalResultDate = new Date(finalresultArray[1] +'.'+finalresultArray[0] + '.' + finalresultArray[2]);

					// 	var dateRangeFormat = dateRange;
					// 	var errMsg = validateDateRange(finalResultDate,dateRangeFormat);
					// 	if (errMsg != undefined){
					// 		return errMsg;
					// 	}
					// }else if(dateFormatOutput == "TT.MM.JJJJ") // DAT00012 DATUM  EIN=(TTMMJJJJ,T.M.JJJJ,TT.MM.JJJJ),AUS=TT.MM.JJJJ
					// {
					// 	if(dateFieldValue.length == 8 && dateFieldValue.indexOf('.')>=0)
					// 	{
					// 		finalResult = '0'+dateFieldValue.substr(0,1)+'.'+'0'+dateFieldValue.substr(2);
					// 	}else if(dateFieldValue.length == 8 && dateFieldValue.indexOf('.')<0)
					// 	{
					// 		finalResult = dateFieldValue.substr(0,2)+'.'+dateFieldValue.substr(2,2)+'.'+dateFieldValue.substr(4,4);
					// 	}
					// 	else{
					// 		finalResult = 	dateFieldValue;
					// 	}
					// }
					else if(dateFormatOutput == "TT.MM.") // DAT00013 DATUM  EIN=(TTMM,T.M.,T.MM.,TT.M.),AUS=TT.MM.
					{
						if(dateFieldValue.length == 4 && dateFieldValue.indexOf('.')>=0)
						{
							finalResult = '0'+dateFieldValue.substr(0,1)+'.'+'0'+dateFieldValue.substr(2);
						}else if(dateFieldValue.length == 4 && dateFieldValue.indexOf('.')<0)
						{
							finalResult = dateFieldValue.substr(0,2)+'.'+dateFieldValue.substr(2,2)+'.';
						}else if(dateFieldValue.length == 5 && dateFieldValue.indexOf('.')==1)
						{
							finalResult = '0'+dateFieldValue;
						}else if(dateFieldValue.length == 5 && dateFieldValue.indexOf('.')==2)
						{
							finalResult = dateFieldValue.substr(0,3)+'0'+dateFieldValue.substr(3,2);
						}
					}
					//alert("Final Result :"+finalResult);
					return finalResult;
			}
			//  else if(rule["func"]) {
			// 	fn = rule["func"];

			// 	// if (typeof(fn) !== "function") {
			// 	// 	alert("jqv:custom parameter 'function' is no function - "+customRule);
			// 	// 		return;
			// 	// }

			// 	if (!fn(field, rules, i, options))
			// 		return options.allrules[customRule].alertText;
			// } else {
			// 	alert("jqv:custom type not allowed "+customRule);
			// 		return;
			// }
		};
