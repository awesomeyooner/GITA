//Programmer: Aaron Yoon
//Date: 9/20/22
//Project: BMI calculator


using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BMI_calculator
{
    public partial class Form1 : Form
    {
        int totalPeople;
        double totalBMI;
        public Form1()
        {
            InitializeComponent();
        }

        private void btnQUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                txtBMI.Text = (poundToKilos() / (feetToMeters() * feetToMeters())).ToString("F");
                lblTotalPeople.Text = (totalPeople += 1).ToString();
                totalBMI += poundToKilos() / (feetToMeters() * feetToMeters());
                lblAvgBMI.Text = (totalBMI / totalPeople).ToString("F");
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

        private double feetToMeters()
        {
            double feet = double.Parse(txtFeet.Text);
            double inches = double.Parse(txtInches.Text);
            double meters = (feet * 12 + inches) * 0.0254;
            return meters;
        }

        private double poundToKilos()
        {
            double kilos = double.Parse(txtWeight.Text) * 0.454;
            return kilos;
        }

        private void arbiWeight_Click(object sender, EventArgs e)
        {

        }

        private void txtInches_TextChanged(object sender, EventArgs e)
        {

        }

        private void txtFeet_TextChanged(object sender, EventArgs e)
        {

        }

        private void arbiFeet_Click(object sender, EventArgs e)
        {

        }

        private void arbiInches_Click(object sender, EventArgs e)
        {

        }

        private void txtWeight_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
