/**
		* Validate amount range 
		*
		* @param {String} fieldValueAmount
		* @param {String} amountRangeFormat
		* @return an error string if validation failed
		*/
validateAmountRange = function(fieldValueAmount, amountRangeFormat){
			var amountRange ;
			if(amountRangeFormat.indexOf(":")>=0){
				var amountRangeArray = amountRangeFormat.split(":");
				var rangeStart = amountRangeArray[0];
				var rangeEnd = amountRangeArray[1];
				if(rangeEnd.indexOf(",") >= 0 )
				{
					rangeEnd = rangeEnd.replace(/\,/g,'.');
				}
				if(fieldValueAmount.indexOf(",") >= 0 )
				{
					fieldValueAmount = fieldValueAmount.replace(/\,/g,'.');
				}
				//alert("start :"+rangeStart+ ","+"rangeEnd :"+rangeEnd);
				if (!(parseInt(fieldValueAmount) >= rangeStart && parseInt(fieldValueAmount) <= rangeEnd))
				{
					if(rangeEnd.indexOf(".") >= 0 )
					{
						rangeEnd = rangeEnd.replace(/\./g,',');
					}
					return "should be in range "+rangeStart + ":"+rangeEnd ;
				}
			}else if (amountRangeFormat.indexOf("<=") >=0){
				amountRange = parseInt(amountRangeFormat.substr(2));
				if(!(fieldValueAmount <= amountRange)){
					return "should be <= "+amountRange ; ;
				}
			}else if (amountRangeFormat.indexOf("<") >=0){
				amountRange = parseInt(amountRangeFormat.substr(1));
				if(!(fieldValueAmount < amountRange)){
					return "should be < "+amountRange ;
				}
			}else if (amountRangeFormat.indexOf(">=") >=0){
				amountRange = parseInt(amountRangeFormat.substr(2));
				if(!(fieldValueAmount >= amountRange)){
					return "should be >= "+amountRange ;
				}
			}else if (amountRangeFormat.indexOf(">") >=0){
				amountRange = parseInt(amountRangeFormat.substr(1));
				if(!(parseInt(fieldValueAmount) > amountRange)){
					return "should be > "+ amountRange;
				}
			}
		};
validateAmount = function(valueTobeChecked, beforeComma, afterComma, amountRange, plus, minus,format) {
			valueTobeChecked = valueTobeChecked+"";
			var beforeCommaRegEx = "([0-9]{1,3}\\.([0-9]{3}\\.)*[0-9]{3}|[0-9]{1,#})";
			var afterCommaRegEx = "(([\\,][0-9]{1,#}))?"; 
            var regEx ="";
            var operatorRegEx = "";
			if(beforeComma > 0){
				regEx = beforeCommaRegEx.replace(/#/g,beforeComma);
			}else{
				return "The property 'beforeComma' is not defined.";
			}
			if(afterComma > 0 ){
				regEx = regEx + afterCommaRegEx.replace(/#/g,afterComma);
			}
			
			if(plus == "+"){
				operatorRegEx = "[\\+";
			}
			// else{
			// 		return "The value of the property 'plus' should be '+'.";
			// 	}
			
			if(minus == "-"){
			  	operatorRegEx = operatorRegEx + "\\-"
			}
			// else{
			// 		return "The value of the property 'minus' should be '-'.";
			// }
			if (operatorRegEx!=""){
				operatorRegEx = operatorRegEx + "]?";	
			}
			
			regEx = "^"+operatorRegEx+ regEx+"$";
		    if(beforeComma > 0) {
				// var ex=rule.regex;
				var ex=regEx;
				
				var pattern = new RegExp(ex);
//alert(ex + ".."+valueTobeChecked);
				if (!pattern.test(valueTobeChecked)) return "should be in '"+format+ "' format";
					var strArrayValue;
					var beforeCommaValue = "";
					var afterCommaValue = "";
					if (valueTobeChecked.indexOf(',') >= 0 )
					{
						strArrayValue = valueTobeChecked.split(',');
						beforeCommaValue = strArrayValue[0];
						afterCommaValue = strArrayValue[1];
					}else
					{
						beforeCommaValue = valueTobeChecked;
						afterCommaValue = "";
					}
					if (beforeCommaValue.indexOf("+") >= 0 )
					{
						beforeCommaValue = beforeCommaValue.substr(beforeCommaValue.indexOf("+")+1);
					}
					if(amountRange != ""){
						var amountRangeFormat = amountRange;
						var errMsg = validateAmountRange(beforeCommaValue, amountRangeFormat);
						if(errMsg != undefined){
							return errMsg;
						}
					}

					
					var minusPrefixValue = "";
					while (beforeCommaValue.indexOf(".") >= 0 ){
							beforeCommaValue = beforeCommaValue.substr(0,beforeCommaValue.indexOf(".")) + beforeCommaValue.substr(beforeCommaValue.indexOf(".")+1);	
					}	
					if (beforeCommaValue.indexOf("-") >= 0 )
					{
						beforeCommaValue = beforeCommaValue.substr(beforeCommaValue.indexOf("-")+1);
						if (beforeCommaValue.length >=0 && beforeCommaValue.length <beforeComma)
						{
							minusPrefixValue = 'A';
						}else
						{
							
							switch (beforeCommaValue.substr(0,1)) {
								 case '0': 
							    	minusPrefixValue = 'A';
							    	break;
							    case '1': 
							    	minusPrefixValue = 'B';
							    	break;
							    case '2': 
							    	minusPrefixValue = 'C';
							    	break;
							    case '3': 
							    	minusPrefixValue = 'D';
							    	break;
								case '4': 
							    	minusPrefixValue = 'E';
							    	break;				
								case '5': 
							    	minusPrefixValue = 'F';
							    	break;				
								case '6': 
							    	minusPrefixValue = 'G';
							    	break;				
								case '7': 
							    	minusPrefixValue = 'H';
							    	break;
							    case '8': 
							    	minusPrefixValue = 'I';
							    	break;
							    case '9': 
							    	minusPrefixValue = 'J';
							    	break;									    				    				    				    	
							}
							beforeCommaValue = beforeCommaValue.substr(1);
						}
						for (var i=beforeCommaValue.length+1; i<beforeComma; i++)
	  					{
	  						beforeCommaValue = "0" + beforeCommaValue;
	  					}
	  					beforeCommaValue = minusPrefixValue + beforeCommaValue;
					}

					 var beforeCommaValueStr = "";
					 if(beforeCommaValue.length > beforeComma)
					{
						return alertText;
					}else
					{
						for (var i=beforeCommaValue.length; i<beforeComma; i++)
	  					{
	  						beforeCommaValue = "0" + beforeCommaValue;
	  					}
	  				}
					for (var i=afterCommaValue.length; i<afterComma; i++)
  					{
  						afterCommaValue = afterCommaValue + "0";
  					}
  			
  			//		alert("Final Value :"  + beforeCommaValue + afterCommaValue);
  					return beforeCommaValue + afterCommaValue;

			 } 
			
		}