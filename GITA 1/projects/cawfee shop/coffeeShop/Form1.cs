//Programmer: Aaron Yoon
//Date: 10/20/22
//Project: i dont even know something about coffee shop simulation

using System;
using System.CodeDom;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace coffeeShop
{
    public partial class frmMain : Form
    {

        //declare our global level variables
        //declare constants- these hold the prices of the coffees
        const decimal CAPPUCCINO_PRICE = 2M;
        const decimal ESPRESSO_PRICE = 2.5M;
        const decimal LATTE_PRCE = 1.75M;
        const decimal ICED_LATTE = 2.5M;
        const decimal ICED_CAPPUCINO = 2.5M;
        const decimal TAX_RATE = 0.08M;

        private decimal subTotal = 0M;
        private decimal totalDecimal = 0M;
        




        public frmMain()
        {
            InitializeComponent();
        }

        private void calculateButton_Click(object sender, EventArgs e)
        {
            //calculate the cost of the order 

            //step 1: declare local variables
            decimal priceDecimal = 0M;
            int quantity = 0;
            decimal taxDecimal = 0M;
            decimal itemAmount = 0M;

            //step 2: get information from the textbox
            quantity = int.Parse(quantityTextBox.Text);

            //step 3: calculations
            if (cappuccinoRadioButton.Checked)
            {
                priceDecimal = CAPPUCCINO_PRICE;
            }
            else if (espressoRadioButton.Checked)
            {
                priceDecimal = ESPRESSO_PRICE;
            }
            else if (LatteRadioButton.Checked)
            {
                priceDecimal = LATTE_PRCE;
            }
            else if (icedLatteRadioButton.Checked)
            {
                priceDecimal = ICED_LATTE;
            }
            else //cappucino radio button is checked
            {
                priceDecimal = ICED_CAPPUCINO;
            }

            itemAmount = priceDecimal * quantity;
            //add up the total order
            subTotal += itemAmount;

            if (taxCheckBox.Checked)
            {
                taxDecimal = subTotal * TAX_RATE;
            }
            else
            {
                taxDecimal = 0;
            }
            totalDecimal = subTotal + taxDecimal;

            //step 4 output answers to labels
            itemAmountLabel.Text = itemAmount.ToString("C");
            subtotalLabel.Text = subTotal.ToString("C");
            taxLabel.Text = taxDecimal.ToString("C");
            totalLabel.Text = totalDecimal.ToString("C");
        }

        private void newOrderButton_Click(object sender, EventArgs e)
        {
            
        }

        private void clearButton_Click(object sender, EventArgs e)
        {
            //this clears out the previous information
            quantityTextBox.Clear();
            taxCheckBox.Checked = false;
            cappuccinoRadioButton.Checked = true;
            itemAmountLabel.Text = "";
            subtotalLabel.Text = "";
            taxLabel.Text = "";
            totalLabel.Text = "";

        }

        private void summaryButton_Click(object sender, EventArgs e)
        {
            
        }

        private void exitButton_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
