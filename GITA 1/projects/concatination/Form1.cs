using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace concatination
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Text_TextChanged(object sender, EventArgs e)
        {

        }

        private void phrase_Click(object sender, EventArgs e)
        {

        }

        private void textName_TextChanged(object sender, EventArgs e)
        {

        }

        private void button_PUSH_Click(object sender, EventArgs e)
        {
            phrase.Text = "Hey " + textName.Text;
            phrase.ForeColor = colorDialog1.Color;
            phrase.Font = fontDialog1.Font;
        }

        private void QUIT_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
        
        }

        private void button1_Click(object sender, EventArgs e)
        {
            colorDialog1.ShowDialog();
        }

        private void button_FONT_Click(object sender, EventArgs e)
        {
            fontDialog1.ShowDialog();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void update()
        {
            //if theres something in the box you get trolled, if not then you dont
            if (textColor.Text == null)
                kek.Visible = false;
            else if (textColor.Text != null)
                kek.Visible = true;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            //double numTime = 1;
            numTime += 1;
            update();
            time.Text = "Time:" + numTime;
        }
    }
}
