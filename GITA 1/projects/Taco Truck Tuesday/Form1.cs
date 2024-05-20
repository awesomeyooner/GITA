using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


//Programmer: Aaron Yoon
//Date: 12/2/22
//Project: Taco truck simulation



namespace Taco_Truck_Tuesday
{
    public partial class Form1 : Form
    {
        //declare manager info variables
        int totalSales = 0;
        double totalIncome = 0;
        double queuedPrice = 0;
        

        //declare the prices

        //shells
        static double softShellPrice = 2;
        static double hardShellPrice = 2.5;
        static double doritoShellPrice = 3;

        //meats
        static double beefMeatPrice = 1.5;
        static double chickenMeatPrice = 2.25;
        static double porkMeatPrice = 1;

        //toppings
        static double cheeseTopPrice = 0.5;
        static double guacTopPrice = 0.75;
        static double salsaTopPrice = 0.25;
        static double onionTopPrice = 0.3;
        static double tomatoTopPrice = 0.6;

        double tax = 1.0775;
        public Form1()
        {
            InitializeComponent();
        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {

        }

        private void btnQuit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnComplete_Click(object sender, EventArgs e)
        {
            //adds total sales and adds the order price to the total income and makes the average sale variable
            totalSales += 1;
            totalIncome += queuedPrice;
            double avgSale = totalIncome / totalSales;
            //lblOutput.Text = queuedPrice.ToString("C");

            DialogResult resultAnswer = new DialogResult();

            resultAnswer = MessageBox.Show("Complete Order?", "FINAL ORDER", MessageBoxButtons.YesNo);
                
                

            if(resultAnswer == DialogResult.Yes)
            {
                MessageBox.Show("Your total is: " + queuedPrice.ToString("C"), "SUMMARY", MessageBoxButtons.OK);
                clear();
            }
         


        }

        private double getShell()
        {
            //gets the price of what shell is selected
            if (radShellSoft.Checked)
                return softShellPrice;
            else if (radShellHard.Checked)
                return hardShellPrice;
            else 
                return doritoShellPrice;
        }

        private string getShellName()
        {
            //returns what shell is ordered to make outputs easier
            if (radShellSoft.Checked)
                return "Soft Shell";
            else if (radShellHard.Checked)
                return "Hard Shell";
            else
                return "Dorito Shell";
        }

        private double getMeat()
        {
            //gets the price of what meat is selected
            if (radMeatBeef.Checked)
                return beefMeatPrice;
            else if (radMeatChicken.Checked)
                return chickenMeatPrice;
            else
                return porkMeatPrice;
        }

        private string getMeatName()
        {
            //returns what meat is chosen in a string to make outputs easier
            if (radMeatBeef.Checked)
                return "Beef";
            else if (radMeatChicken.Checked)
                return "Chicken";
            else
                return "Pork";
        }
        private double getToppings()
        {
            //gets the total price of all the toppings selected
            double toppingPrice = 0;
            if (chkCheese.Checked)
                toppingPrice += cheeseTopPrice;
            if (chkGuac.Checked)
                toppingPrice += guacTopPrice;
            if (chkOnion.Checked)
                toppingPrice += onionTopPrice;
            if (chkSalsa.Checked)
                toppingPrice += salsaTopPrice;
            if (chkTomato.Checked)
                toppingPrice += tomatoTopPrice;

            return toppingPrice;

        }

        private string getToppingNames()
        {
            //returns the string of what toppings are ordered to make outputs easier
            string toppings = "";

            if (chkCheese.Checked)
                toppings += "Cheese ";
            if (chkGuac.Checked)
                toppings += "Guacamole ";
            if (chkOnion.Checked)
                toppings += "Onion ";
            if (chkSalsa.Checked)
                toppings += "Salsa ";
            if (chkTomato.Checked)
                toppings += "Tomato ";

            return toppings;
        }

        private string[] getOrder(string quantity1, string shell1, string meat1, string toppings1)
        {
            //makes an array based on the parameters and returns it
            string[] orderList =
            {
                quantity1,
                shell1,
                meat1,
                toppings1
            };
                
            return orderList;
        }

        private double getPrice()
        {
            //gets the price of the order with credit being an option
            if (chkCredit.Checked)
                return ((getMeat() + getShell() + getToppings()) * tax * (int.Parse(txtQuantity.Text)));
            else
                return ((getMeat() + getShell() + getToppings()) * (int.Parse(txtQuantity.Text)));
        }

        private DialogResult displayOrder(string[] order)
        {
            //displays the order in a messagebox
            return MessageBox.Show(order[0] + " " + order[1] + " " + order[2] + " Tacos With " + order[3] + "\n"
                + "for " + txtFirstName.Text + " " + txtLastName.Text + "\n"
                + getPrice().ToString("C") + "\n"
                + txtOrderNum.Text,
                "Order",
                MessageBoxButtons.OKCancel
                );
        }
        private void btnSummary_Click(object sender, EventArgs e)
        {
            //shows all the stats of everything
            MessageBox.Show("Earned: " + totalIncome.ToString("C") + "\n" +
                "Total Customers: " + totalSales.ToString() + "\n" +
                "Average Income: " + (totalIncome / totalSales).ToString("C")
                );
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            //make the array variable
            string[] order1 = getOrder(txtQuantity.Text, getShellName(), getMeatName(), getToppingNames());
            //displays the order
            DialogResult resultAnswer = new DialogResult(); 
            resultAnswer = displayOrder(order1);

            queuedPrice += getPrice();


            if (resultAnswer == DialogResult.OK)
            {
                txtFirstName.Enabled = false;
                txtLastName.Enabled = false;
                txtOrderNum.Enabled = false;
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            //calls the clear method when btnClear is pressed
            clear();
        }

        private void clear()
        {
            //clears everything
            txtFirstName.Enabled = true;
            txtLastName.Enabled = true;
            txtOrderNum.Enabled = true;
            txtFirstName.Text = null;
            txtLastName.Text = null;
            txtOrderNum.Text = null;
            txtQuantity.Text = null;

            chkCheese.Checked = false;
            chkGuac.Checked = false;
            chkOnion.Checked = false;
            chkSalsa.Checked = false;
            chkTomato.Checked = false;

            radMeatBeef.Checked = false;
            radMeatChicken.Checked = false;
            radMeatPork.Checked = false;
            radShellDorito.Checked = false;
            radShellHard.Checked = false;
            radShellSoft.Checked = false;

            queuedPrice = 0;
        }
    }
}
