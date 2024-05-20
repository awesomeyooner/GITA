//Programmer: Aaron Yoon
//Date: 9/16/22
//Project: Car Rental Caluclator
using System.Windows.Forms;

namespace Car_Rental
{
    public partial class CarRental : Form
    {
        private double totalMoney;
        private int carsReturned;
        private int dayFactor;
        private double mileFactor;
        private string carDialog;

        public CarRental()
        {
            InitializeComponent();
        }

        private void btnQUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void CarRental_Load(object sender, EventArgs e)
        {

        }

        private void label10_Click(object sender, EventArgs e)
        {

        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {
            try
            {
                double totalCost;
                int boiseConstant;
                int leatherConstant;

                if (chkBoise.Checked)
                    boiseConstant = 8;
                else
                    boiseConstant = 0;

                if (chkLeather.Checked)
                    leatherConstant = 6;
                else
                    leatherConstant = 0;

                if (radPeel.Checked)
                {
                    mileFactor = .13;
                    dayFactor = 17 + boiseConstant + leatherConstant;
                    carDialog = "Your car is: Peel P50";
                    picPeel.Visible = true;
                    picTank.Visible = false;
                    picVolks.Visible = false;
                }
                else if (radTank.Checked)
                {
                    mileFactor = .18;
                    dayFactor = 22 + boiseConstant + leatherConstant;
                    carDialog = "Your vehicle is: M1 Abrams Tank";
                    picPeel.Visible = false;
                    picTank.Visible = true;
                    picVolks.Visible = false;
                }
                else if (radCamper.Checked)
                {
                    mileFactor = .22;
                    dayFactor = 27 + boiseConstant + leatherConstant;
                    carDialog = "Your car is: Volkswagen Camper";
                    picPeel.Visible = false;
                    picTank.Visible = false;
                    picVolks.Visible = true;
                }
                carsReturned += 1;
                double milesDriven = double.Parse(txtEndOdom.Text) - double.Parse(txtBeginOdom.Text);

                if (milesDriven > 100)
                    totalCost = mileFactor * milesDriven + dayFactor * double.Parse(txtNumDays.Text);
                else
                    totalCost = dayFactor * double.Parse(txtNumDays.Text);
                totalMoney += totalCost;

                lblOutputInfo.Visible = true;
                lblOutputInfo.Text = txtFirstName.Text + " " + txtLastName.Text + "\n"
                + txtAddress.Text + "\n"
                + txtCity.Text + ", " + txtState.Text + " " + txtZipCode.Text + "\n"
                + "Driven " + milesDriven.ToString() + " miles" + "\n"
                + "Your total cost is " + totalCost.ToString("C") + "\n"
                + carDialog;

                double averageCost = totalMoney / carsReturned;
                lblCarsReturned.Text = carsReturned.ToString();
                lblTotalMoney.Text = totalMoney.ToString("C");
                lblAverageCost.Text = averageCost.ToString("C");
            }
            catch
            {
                MessageBox.Show("Missing Data",
                    "Data Error",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Error
                    );
            }
        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            lblOutputInfo.Visible = false;
            txtFirstName.Text = null;
            txtLastName.Text = null;
            txtAddress.Text = null;
            txtCity.Text = null;
            txtState.Text = null;
            txtZipCode.Text = null;
            txtBeginOdom.Text = null;
            txtEndOdom.Text = null;
            txtNumDays.Text = null;
        }

        private void chkLeather_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void ckcBoise_CheckedChanged(object sender, EventArgs e)
        {

        }
    }
}