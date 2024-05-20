//Programmer: Aaron Yoon
//Date: 9/16/22
//Project: Car Rental Caluclator
namespace Car_Rental
{
    public partial class CarRental : Form
    {
        private double totalMoney;
        private int carsReturned;

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
                carsReturned += 1;
                double milesDriven = double.Parse(txtEndOdom.Text) - double.Parse(txtBeginOdom.Text);
                double totalCost = 0.32 * milesDriven + 85 * double.Parse(txtNumDays.Text);
                totalMoney += totalCost;

                lblOutputInfo.Visible = true;
                lblOutputInfo.Text = txtFirstName.Text + " " + txtLastName.Text + "\n"
                + txtAddress.Text + "\n"
                + txtCity.Text + ", " + txtState.Text + " " + txtZipCode.Text + "\n"
                + "Driven " + milesDriven.ToString() + " miles" + "\n"
                + "Your total cost is " + totalCost.ToString("C");

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
    }
}