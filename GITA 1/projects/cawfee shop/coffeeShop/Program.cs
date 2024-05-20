//Programmer: Aaron Yoon
//Date: 10/19/22
//Program: coffee shop simulation
using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace coffeeShop
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new frmMain());
        }
    }
}
