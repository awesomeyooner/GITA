
        var totalOrdersPlaced = 0 + 0;
        var totalMoney = 0 + 0;
        var averagePrice = 0 + 0;   

        function outputReceipt(){
            //make variables to access them easier
            var name = inputForm.name.value;
            var street = inputForm.street.value;
            var city = inputForm.city.value;
            var state = inputForm.state.value;
            var zip = inputForm.zip.value;

            document.outputForm.receiptField.value = 
            name + "\n" +
            street + "\n" +
            city + "\n" +
            state + "\n" +
            zip + "\n" + 
            "\n" + "\n" +
            getFood();

            document.outputForm.statsField.value = 
            "Total Orders: " + totalOrdersPlaced + "\n" +
            "Total Money Gained: $" + totalMoney + "\n" +
            "Average Price: $" + averagePrice;

        }

        function getFood(){
            //make quantities into variables to access them easier
            var burgers = inputForm.quantityCheeseBurger.value;
            var fries = inputForm.quantityFries.value;
            var cups = inputForm.quantityCups.value;
            var milkshakes = inputForm.quantityMilkshakes.value;

            var totalCost = 0 + 0;

            //placeholders for what to say
            var burgerOrder = "";
            var friesOrder = "";
            var cupsOrder = "";
            var milkshakesOrder = "";

            //if you ordered something then output a line that says what you ordered, how many, and the price
            //if you didn't order something then it wont say it
            if(burgers > 0){
                burgerOrder = burgers + " Burgers: $" + (burgers * 4);
                totalCost += burgers * 4;
            }
            if(fries > 0){
                friesOrder = fries + " Fries: $" + (fries * 2);
                totalCost += fries * 2;
            }
                
            if(cups > 0){
                cupsOrder = cups + " Cups: $" + (cups * 1);
                totalCost += cups * 1;
            }

            if(milkshakes > 0){
                milkshakesOrder = milkshakes + " MilkShakes: $" + (milkshakes * 2);
                totalCost += milkshakes * 2;
            }

            //if at least something was ordered then output the phrases
            if(burgers > 0 || fries > 0 || cups > 0 || milkshakes > 0){
                totalMoney += totalCost;
                totalOrdersPlaced += 1;
                averagePrice = totalMoney / totalOrdersPlaced;

                return burgerOrder + "\n" + 
                    friesOrder + "\n" +
                    cupsOrder + "\n" +
                    milkshakesOrder + "\n" + "\n" +
                    "Your Total Is: $" + totalCost; 
            }
            //if you didnt order anything say this
            else
                return "Nothing Ordered: $0";

        }
