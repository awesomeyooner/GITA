//Programmer: Aaron Yoon
//Date: 9/6/22
//Project: Mailing Label

namespace Mailing_Label
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void QUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click_1(object sender, EventArgs e)
        {

        }

        private void opArea_Click(object sender, EventArgs e)
        {

        }

        private void opName_Click(object sender, EventArgs e)
        {

        }

        private void buttonPUSH_Click(object sender, EventArgs e)
        {
            opName.Text = textFirstName.Text + " " + textLastName.Text;
            opAddress.Text = textStreet.Text;
            opArea.Text = textCity.Text + ", " + textState.Text + " " + textZipcode.Text;

            //pushes changes to mailing list using inputs
        }

        private void clearFirstName_Click(object sender, EventArgs e)
        {
            textFirstName.Text = null;
            //clears first name input
        }

        private void clearLastName_Click(object sender, EventArgs e)
        {
            textLastName.Text = null;
            //clears last name input
        }

        private void clearStreet_Click(object sender, EventArgs e)
        {
            textStreet.Text = null;
            //clears street input
        }

        private void clearCity_Click(object sender, EventArgs e)
        {
            textCity.Text = null;
            //clears city input
        }

        private void clearState_Click(object sender, EventArgs e)
        {
            textState.Text = null;
            //clears state input
        }

        private void clearZip_Click(object sender, EventArgs e)
        {
            textZipcode.Text = null;
            //clears zip code input
        }
    }
}