namespace Bookstore
{
    public partial class Form1 : Form
    {
        //declare global variables which store information over the life of the project
        private int totalPeople;
        private decimal totalSales;
        
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void txtTitle_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnQUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnCalculate_Click(object sender, EventArgs e)
        {
            //calculate the cost of buying a book
            //step 1: declare variables to store information
            decimal priceDecimal;
            decimal quantityDecimal;
            decimal extendedPriceDecimal;
            decimal discountDecimal;
            decimal discountPriceDecimal;
            decimal averageSaleDecimal;

            try
            {
                //step 2: get information and store it in the variables
                priceDecimal = decimal.Parse(txtPrice.Text);
                quantityDecimal = decimal.Parse(txtQuantity.Text);

                //step 3: calculate
                extendedPriceDecimal = priceDecimal * quantityDecimal;
                discountDecimal = extendedPriceDecimal * (Decimal)0.15;
                discountPriceDecimal = extendedPriceDecimal - discountDecimal;

                //calculate manager stats
                totalPeople += 1;
                totalSales += discountPriceDecimal;
                averageSaleDecimal = totalSales / totalPeople;

                //step 4: output answers to the form
                txtExtendedPrice.Text = extendedPriceDecimal.ToString("C");
                txtDiscountAmount.Text = discountDecimal.ToString("C");
                txtDiscountPrice.Text = discountPriceDecimal.ToString("C");

                //output manager stats
                lblTotalPeople.Text = totalPeople.ToString();
                lblTotalSales.Text = totalSales.ToString("C");
                lblAverageSales.Text = averageSaleDecimal.ToString("C");
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

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label8_Click(object sender, EventArgs e)
        {

        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            //this clears labels and textboxes
            txtTitle.Clear();
            txtPrice.Clear();
            txtQuantity.Clear();
            txtExtendedPrice.Clear();
            txtDiscountAmount.Clear();
            txtDiscountPrice.Clear();
            lblTotalPeople.Text = null;
            lblTotalSales.Text = null; 
            lblAverageSales.Text = null;    
        }
    }
}