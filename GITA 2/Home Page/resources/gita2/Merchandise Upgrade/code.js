
        var totalOrdersPlaced = 0 + 0;
        var totalMoney = 0 + 0;
        var averagePrice = 0 + 0;   

        var peopleWithSisters = 0 + 0;
        var peopleWithBrothers = 0 + 0;

        function outputReceipt(){
            //make variables to access them easier
            var name = inputForm.name.value;
            var street = inputForm.street.value;
            var city = inputForm.city.value;
            var state = inputForm.state.value;
            var zip = inputForm.zip.value;

            var siblings = document.getElementsByName("sibling");

            if(siblings[0].checked){
                peopleWithBrothers++;
            }
            if(siblings[1].checked){
                peopleWithSisters++;
            }

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
            "Average Price: $" + averagePrice + "\n" +
            "People With Brothers: " + peopleWithBrothers + "\n" +
            "People With Sisters: " + peopleWithSisters;

        }

        function getFood(){
            //make quantities into variables to access them easier
            var burgers = inputForm.quantityCheeseBurger.value;
            var fries = inputForm.quantityFries.value;
            var cups = inputForm.quantityCups.value;
            var milkshakes = inputForm.quantityMilkshakes.value;
            var discount = 1 + 0;;

            var buttons = document.getElementsByName('class');

            if(buttons[0].checked)
                discount = 0.85;
            else if(buttons[1].checked)
                discount = 0.8;
        

            var totalCost = 0 + 0;
            var discountedCost = 0 + 0

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
                
                discountCost = Math.round(totalCost * discount * 100) / 100;

                totalMoney += discountCost;
                totalOrdersPlaced += 1;
                averagePrice = Math.round(100 *(discountCost / totalOrdersPlaced)) / 100;

                

                if(discountCost != totalCost){
                    return burgerOrder + "\n" + 
                        friesOrder + "\n" +
                        cupsOrder + "\n" +
                        milkshakesOrder + "\n" + "\n" +
                        "Your normal is: $" + totalCost + "\n" +
                        "Your Total Is: $" + discountCost + "\n" +
                        "You saved: $" + (Math.round((totalCost - discountCost) * 100) / 100); 
                }
                else{
                    return burgerOrder + "\n" + 
                        friesOrder + "\n" +
                        cupsOrder + "\n" +
                        milkshakesOrder + "\n" + "\n" +
                        "Your Total Is: $" + totalCost;
                }
            }
            //if you didnt order anything say this
            else
                return "Nothing Ordered: $0";

        }