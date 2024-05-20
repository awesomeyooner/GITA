namespace Test_Score_Program
{
    partial class Form1
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
            this.lblTestOne = new System.Windows.Forms.Label();
            this.lblTest2 = new System.Windows.Forms.Label();
            this.txtTestOne = new System.Windows.Forms.TextBox();
            this.txtTestTwo = new System.Windows.Forms.TextBox();
            this.btnCalculate = new System.Windows.Forms.Button();
            this.arbiLine = new System.Windows.Forms.Label();
            this.lblOutput = new System.Windows.Forms.Label();
            this.btnCLEAR = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnQUIT
            // 
            this.btnQUIT.BackColor = System.Drawing.SystemColors.Control;
            this.btnQUIT.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnQUIT.Location = new System.Drawing.Point(655, 46);
            this.btnQUIT.Name = "btnQUIT";
            this.btnQUIT.Size = new System.Drawing.Size(139, 56);
            this.btnQUIT.TabIndex = 0;
            this.btnQUIT.Text = "QUIT";
            this.btnQUIT.UseVisualStyleBackColor = false;
            this.btnQUIT.Click += new System.EventHandler(this.btnQUIT_Click);
            // 
            // lblTestOne
            // 
            this.lblTestOne.AutoSize = true;
            this.lblTestOne.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblTestOne.Location = new System.Drawing.Point(28, 34);
            this.lblTestOne.Name = "lblTestOne";
            this.lblTestOne.Size = new System.Drawing.Size(165, 38);
            this.lblTestOne.TabIndex = 1;
            this.lblTestOne.Text = "Test Score 1";
            // 
            // lblTest2
            // 
            this.lblTest2.AutoSize = true;
            this.lblTest2.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblTest2.Location = new System.Drawing.Point(28, 120);
            this.lblTest2.Name = "lblTest2";
            this.lblTest2.Size = new System.Drawing.Size(165, 38);
            this.lblTest2.TabIndex = 2;
            this.lblTest2.Text = "Test Score 2";
            // 
            // txtTestOne
            // 
            this.txtTestOne.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtTestOne.Location = new System.Drawing.Point(211, 34);
            this.txtTestOne.Name = "txtTestOne";
            this.txtTestOne.Size = new System.Drawing.Size(208, 43);
            this.txtTestOne.TabIndex = 3;
            // 
            // txtTestTwo
            // 
            this.txtTestTwo.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtTestTwo.Location = new System.Drawing.Point(211, 120);
            this.txtTestTwo.Name = "txtTestTwo";
            this.txtTestTwo.Size = new System.Drawing.Size(208, 43);
            this.txtTestTwo.TabIndex = 4;
            // 
            // btnCalculate
            // 
            this.btnCalculate.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnCalculate.Location = new System.Drawing.Point(475, 25);
            this.btnCalculate.Name = "btnCalculate";
            this.btnCalculate.Size = new System.Drawing.Size(141, 98);
            this.btnCalculate.TabIndex = 5;
            this.btnCalculate.Text = "DO THE THING";
            this.btnCalculate.UseVisualStyleBackColor = true;
            this.btnCalculate.Click += new System.EventHandler(this.btnCalculate_Click);
            // 
            // arbiLine
            // 
            this.arbiLine.BackColor = System.Drawing.Color.Blue;
            this.arbiLine.Location = new System.Drawing.Point(-5, 190);
            this.arbiLine.Name = "arbiLine";
            this.arbiLine.Size = new System.Drawing.Size(857, 10);
            this.arbiLine.TabIndex = 6;
            // 
            // lblOutput
            // 
            this.lblOutput.AutoSize = true;
            this.lblOutput.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblOutput.Location = new System.Drawing.Point(142, 251);
            this.lblOutput.Name = "lblOutput";
            this.lblOutput.Size = new System.Drawing.Size(162, 38);
            this.lblOutput.TabIndex = 7;
            this.lblOutput.Text = "placeholder";
            this.lblOutput.Visible = false;
            // 
            // btnCLEAR
            // 
            this.btnCLEAR.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnCLEAR.Location = new System.Drawing.Point(564, 129);
            this.btnCLEAR.Name = "btnCLEAR";
            this.btnCLEAR.Size = new System.Drawing.Size(176, 41);
            this.btnCLEAR.TabIndex = 8;
            this.btnCLEAR.Text = "CLEAR";
            this.btnCLEAR.UseVisualStyleBackColor = true;
            this.btnCLEAR.Click += new System.EventHandler(this.btnCLEAR_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnCLEAR);
            this.Controls.Add(this.lblOutput);
            this.Controls.Add(this.arbiLine);
            this.Controls.Add(this.btnCalculate);
            this.Controls.Add(this.txtTestTwo);
            this.Controls.Add(this.txtTestOne);
            this.Controls.Add(this.lblTest2);
            this.Controls.Add(this.lblTestOne);
            this.Controls.Add(this.btnQUIT);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button btnQUIT;
        private Label lblTestOne;
        private Label lblTest2;
        private TextBox txtTestOne;
        private TextBox txtTestTwo;
        private Button btnCalculate;
        private Label arbiLine;
        private Label lblOutput;
        private Button btnCLEAR;
    }
}