//Programmer: Aaron Yoon
//Date: 9/5/22
//Project: About page 

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace about_me_page
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
            //closes the program
        }

        private void picLogo_Click(object sender, EventArgs e)
        {
            picLogo.Visible = false;
            picThief.Visible = true;
            //changes picture
        }

        private void buttonLogo_Click(object sender, EventArgs e)
        {
            toggleLogo();
        }

        private void toggleLogo()
        {
            if (!picLogo.Visible)
                picLogo.Visible = true;

            if (textTradeMark.Visible)
                textTradeMark.Visible = false;

            if (textAbout.Visible)
                textAbout.Visible = false;

            if (picThief.Visible)
                picThief.Visible = false;

            if (picThumbsUp.Visible)
                picThumbsUp.Visible = false;

            //shows ONLY the pic logo
        }

        private void toggleTrademark()
        {
            if (!textTradeMark.Visible)
                textTradeMark.Visible = true;

            if (picLogo.Visible)
                picLogo.Visible = false;

            if (textAbout.Visible)
                textAbout.Visible = false;

            if (picThief.Visible)
                picThief.Visible = false;

            if (picThumbsUp.Visible)
                picThumbsUp.Visible = false;

            //shows ONLY trademark
        }

        private void toggleAbout()
        {
            if (!textAbout.Visible)
                textAbout.Visible = true;

            if (picLogo.Visible)
                picLogo.Visible = false;

            if (textTradeMark.Visible)
                textTradeMark.Visible = false;

            if (picThief.Visible)
                picThief.Visible = false;

            if (picThumbsUp.Visible)
                picThumbsUp.Visible = false;

            //shows ONLY about 
        }

        private void button1_Click(object sender, EventArgs e)
        {
            toggleTrademark();

        }

        private void buttonAbout_Click(object sender, EventArgs e)
        {
            toggleAbout();
        }

        private void buttonClear_Click(object sender, EventArgs e)
        {
            picLogo.Visible = false;
            textTradeMark.Visible = false;
            textAbout.Visible = false;
            picThief.Visible = false;
            picThumbsUp.Visible = false;

            //clears the page
        }

        private void buttonColor_Click(object sender, EventArgs e)
        {
            colorDialog1.ShowDialog();
        }

        private void buttonFont_Click(object sender, EventArgs e)
        {
            fontDialog1.ShowDialog();
        }

        private void textAbout_TextChanged(object sender, EventArgs e)
        {
        }

        private void buttonPush_Click(object sender, EventArgs e)
        {
            textAbout.ForeColor = colorDialog1.Color;
            textTradeMark.ForeColor = colorDialog1.Color;
            textAbout.Font = fontDialog1.Font;
            textTradeMark.Font = fontDialog1.Font;

            //pushes changes
        }

        private void picThief_Click(object sender, EventArgs e)
        {
            picThumbsUp.Visible = true;
            picThief.Visible = false;

            //changes pic
        }

        private void picThumbsUp_Click(object sender, EventArgs e)
        {
            picLogo.Visible = true;
            picThumbsUp.Visible = false;
            
            //changes pic
        }
    }
}
