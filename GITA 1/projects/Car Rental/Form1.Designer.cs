namespace Car_Rental
{
    partial class CarRental
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnQUIT = new System.Windows.Forms.Button();
            this.txtFirstName = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txtLastName = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.txtAddress = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.txtZipCode = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.txtState = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.txtCity = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.txtNumDays = new System.Windows.Forms.TextBox();
            this.label8 = new System.Windows.Forms.Label();
            this.txtEndOdom = new System.Windows.Forms.TextBox();
            this.label9 = new System.Windows.Forms.Label();
            this.txtBeginOdom = new System.Windows.Forms.TextBox();
            this.label10 = new System.Windows.Forms.Label();
            this.arbiText = new System.Windows.Forms.Label();
            this.lblOutputInfo = new System.Windows.Forms.Label();
            this.btnCalculate = new System.Windows.Forms.Button();
            this.btnClear = new System.Windows.Forms.Button();
            this.arbiCarsReturned = new System.Windows.Forms.Label();
            this.arbiTotalMoney = new System.Windows.Forms.Label();
            this.arbiAverageCost = new System.Windows.Forms.Label();
            this.lblCarsReturned = new System.Windows.Forms.Label();
            this.lblTotalMoney = new System.Windows.Forms.Label();
            this.lblAverageCost = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btnQUIT
            // 
            this.btnQUIT.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnQUIT.Location = new System.Drawing.Point(685, 12);
            this.btnQUIT.Name = "btnQUIT";
            this.btnQUIT.Size = new System.Drawing.Size(103, 45);
            this.btnQUIT.TabIndex = 0;
            this.btnQUIT.Text = "QUIT";
            this.btnQUIT.UseVisualStyleBackColor = true;
            this.btnQUIT.Click += new System.EventHandler(this.btnQUIT_Click);
            // 
            // txtFirstName
            // 
            this.txtFirstName.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtFirstName.Location = new System.Drawing.Point(124, 29);
            this.txtFirstName.Name = "txtFirstName";
            this.txtFirstName.Size = new System.Drawing.Size(193, 34);
            this.txtFirstName.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(12, 29);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(106, 28);
            this.label1.TabIndex = 2;
            this.label1.Text = "First Name";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(12, 79);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(103, 28);
            this.label2.TabIndex = 4;
            this.label2.Text = "Last Name";
            // 
            // txtLastName
            // 
            this.txtLastName.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtLastName.Location = new System.Drawing.Point(124, 79);
            this.txtLastName.Name = "txtLastName";
            this.txtLastName.Size = new System.Drawing.Size(193, 34);
            this.txtLastName.TabIndex = 3;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label3.Location = new System.Drawing.Point(36, 128);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(82, 28);
            this.label3.TabIndex = 6;
            this.label3.Text = "Address";
            // 
            // txtAddress
            // 
            this.txtAddress.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtAddress.Location = new System.Drawing.Point(124, 128);
            this.txtAddress.Name = "txtAddress";
            this.txtAddress.Size = new System.Drawing.Size(193, 34);
            this.txtAddress.TabIndex = 5;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label4.Location = new System.Drawing.Point(27, 276);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(91, 28);
            this.label4.TabIndex = 12;
            this.label4.Text = "Zip Code";
            // 
            // txtZipCode
            // 
            this.txtZipCode.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtZipCode.Location = new System.Drawing.Point(124, 276);
            this.txtZipCode.Name = "txtZipCode";
            this.txtZipCode.Size = new System.Drawing.Size(193, 34);
            this.txtZipCode.TabIndex = 11;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label5.Location = new System.Drawing.Point(62, 227);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(56, 28);
            this.label5.TabIndex = 10;
            this.label5.Text = "State";
            // 
            // txtState
            // 
            this.txtState.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtState.Location = new System.Drawing.Point(124, 227);
            this.txtState.Name = "txtState";
            this.txtState.Size = new System.Drawing.Size(193, 34);
            this.txtState.TabIndex = 9;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label6.Location = new System.Drawing.Point(72, 180);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(46, 28);
            this.label6.TabIndex = 8;
            this.label6.Text = "City";
            // 
            // txtCity
            // 
            this.txtCity.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtCity.Location = new System.Drawing.Point(124, 177);
            this.txtCity.Name = "txtCity";
            this.txtCity.Size = new System.Drawing.Size(193, 34);
            this.txtCity.TabIndex = 7;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label7.Location = new System.Drawing.Point(27, 594);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(94, 28);
            this.label7.TabIndex = 18;
            this.label7.Text = "# of Days";
            // 
            // txtNumDays
            // 
            this.txtNumDays.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtNumDays.Location = new System.Drawing.Point(127, 594);
            this.txtNumDays.Name = "txtNumDays";
            this.txtNumDays.Size = new System.Drawing.Size(193, 34);
            this.txtNumDays.TabIndex = 17;
            // 
            // label8
            // 
            this.label8.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label8.Location = new System.Drawing.Point(12, 485);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(109, 97);
            this.label8.TabIndex = 16;
            this.label8.Text = "Ending Odometry Reading";
            // 
            // txtEndOdom
            // 
            this.txtEndOdom.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtEndOdom.Location = new System.Drawing.Point(127, 520);
            this.txtEndOdom.Name = "txtEndOdom";
            this.txtEndOdom.Size = new System.Drawing.Size(193, 34);
            this.txtEndOdom.TabIndex = 15;
            // 
            // label9
            // 
            this.label9.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label9.Location = new System.Drawing.Point(12, 387);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(103, 99);
            this.label9.TabIndex = 14;
            this.label9.Text = "Beginning Odometry Reading";
            // 
            // txtBeginOdom
            // 
            this.txtBeginOdom.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtBeginOdom.Location = new System.Drawing.Point(124, 415);
            this.txtBeginOdom.Name = "txtBeginOdom";
            this.txtBeginOdom.Size = new System.Drawing.Size(193, 34);
            this.txtBeginOdom.TabIndex = 13;
            // 
            // label10
            // 
            this.label10.BackColor = System.Drawing.Color.Blue;
            this.label10.Location = new System.Drawing.Point(337, -1);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(10, 667);
            this.label10.TabIndex = 19;
            this.label10.Click += new System.EventHandler(this.label10_Click);
            // 
            // arbiText
            // 
            this.arbiText.AutoSize = true;
            this.arbiText.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.arbiText.Location = new System.Drawing.Point(164, 468);
            this.arbiText.Name = "arbiText";
            this.arbiText.Size = new System.Drawing.Size(83, 38);
            this.arbiText.TabIndex = 20;
            this.arbiText.Text = "Miles";
            // 
            // lblOutputInfo
            // 
            this.lblOutputInfo.AutoSize = true;
            this.lblOutputInfo.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblOutputInfo.Location = new System.Drawing.Point(469, 118);
            this.lblOutputInfo.Name = "lblOutputInfo";
            this.lblOutputInfo.Size = new System.Drawing.Size(162, 38);
            this.lblOutputInfo.TabIndex = 21;
            this.lblOutputInfo.Text = "placeholder";
            this.lblOutputInfo.Visible = false;
            // 
            // btnCalculate
            // 
            this.btnCalculate.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnCalculate.Location = new System.Drawing.Point(525, 12);
            this.btnCalculate.Name = "btnCalculate";
            this.btnCalculate.Size = new System.Drawing.Size(141, 48);
            this.btnCalculate.TabIndex = 22;
            this.btnCalculate.Text = "CALCULATE";
            this.btnCalculate.UseVisualStyleBackColor = true;
            this.btnCalculate.Click += new System.EventHandler(this.btnCalculate_Click);
            // 
            // btnClear
            // 
            this.btnClear.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnClear.Location = new System.Drawing.Point(366, 15);
            this.btnClear.Name = "btnClear";
            this.btnClear.Size = new System.Drawing.Size(141, 48);
            this.btnClear.TabIndex = 23;
            this.btnClear.Text = "CLEAR";
            this.btnClear.UseVisualStyleBackColor = true;
            this.btnClear.Click += new System.EventHandler(this.btnClear_Click);
            // 
            // arbiCarsReturned
            // 
            this.arbiCarsReturned.AutoSize = true;
            this.arbiCarsReturned.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.arbiCarsReturned.Location = new System.Drawing.Point(366, 380);
            this.arbiCarsReturned.Name = "arbiCarsReturned";
            this.arbiCarsReturned.Size = new System.Drawing.Size(191, 38);
            this.arbiCarsReturned.TabIndex = 24;
            this.arbiCarsReturned.Text = "Cars Returned";
            // 
            // arbiTotalMoney
            // 
            this.arbiTotalMoney.AutoSize = true;
            this.arbiTotalMoney.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.arbiTotalMoney.Location = new System.Drawing.Point(388, 430);
            this.arbiTotalMoney.Name = "arbiTotalMoney";
            this.arbiTotalMoney.Size = new System.Drawing.Size(169, 38);
            this.arbiTotalMoney.TabIndex = 25;
            this.arbiTotalMoney.Text = "Total Money";
            // 
            // arbiAverageCost
            // 
            this.arbiAverageCost.AutoSize = true;
            this.arbiAverageCost.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.arbiAverageCost.Location = new System.Drawing.Point(366, 478);
            this.arbiAverageCost.Name = "arbiAverageCost";
            this.arbiAverageCost.Size = new System.Drawing.Size(179, 38);
            this.arbiAverageCost.TabIndex = 26;
            this.arbiAverageCost.Text = "Average Cost";
            // 
            // lblCarsReturned
            // 
            this.lblCarsReturned.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblCarsReturned.Location = new System.Drawing.Point(563, 380);
            this.lblCarsReturned.Name = "lblCarsReturned";
            this.lblCarsReturned.Size = new System.Drawing.Size(198, 50);
            this.lblCarsReturned.TabIndex = 27;
            // 
            // lblTotalMoney
            // 
            this.lblTotalMoney.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblTotalMoney.Location = new System.Drawing.Point(563, 430);
            this.lblTotalMoney.Name = "lblTotalMoney";
            this.lblTotalMoney.Size = new System.Drawing.Size(198, 38);
            this.lblTotalMoney.TabIndex = 28;
            // 
            // lblAverageCost
            // 
            this.lblAverageCost.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblAverageCost.Location = new System.Drawing.Point(551, 478);
            this.lblAverageCost.Name = "lblAverageCost";
            this.lblAverageCost.Size = new System.Drawing.Size(237, 38);
            this.lblAverageCost.TabIndex = 29;
            // 
            // CarRental
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(865, 660);
            this.Controls.Add(this.lblAverageCost);
            this.Controls.Add(this.lblTotalMoney);
            this.Controls.Add(this.lblCarsReturned);
            this.Controls.Add(this.arbiAverageCost);
            this.Controls.Add(this.arbiTotalMoney);
            this.Controls.Add(this.arbiCarsReturned);
            this.Controls.Add(this.btnClear);
            this.Controls.Add(this.btnCalculate);
            this.Controls.Add(this.lblOutputInfo);
            this.Controls.Add(this.arbiText);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.txtNumDays);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.txtEndOdom);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.txtBeginOdom);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.txtZipCode);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.txtState);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.txtCity);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.txtAddress);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.txtLastName);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtFirstName);
            this.Controls.Add(this.btnQUIT);
            this.Name = "CarRental";
            this.Text = "Car Rental";
            this.Load += new System.EventHandler(this.CarRental_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button btnQUIT;
        private TextBox txtFirstName;
        private Label label1;
        private Label label2;
        private TextBox txtLastName;
        private Label label3;
        private TextBox txtAddress;
        private Label label4;
        private TextBox txtZipCode;
        private Label label5;
        private TextBox txtState;
        private Label label6;
        private TextBox txtCity;
        private Label label7;
        private TextBox txtNumDays;
        private Label label8;
        private TextBox txtEndOdom;
        private Label label9;
        private TextBox txtBeginOdom;
        private Label label10;
        private Label arbiText;
        private Label lblOutputInfo;
        private Button btnCalculate;
        private Button btnClear;
        private Label arbiCarsReturned;
        private Label arbiTotalMoney;
        private Label arbiAverageCost;
        private Label lblCarsReturned;
        private Label lblTotalMoney;
        private Label lblAverageCost;
    }
}