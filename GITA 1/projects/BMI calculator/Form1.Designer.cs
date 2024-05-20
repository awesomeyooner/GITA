namespace BMI_calculator
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.arbiFeet = new System.Windows.Forms.Label();
            this.arbiInches = new System.Windows.Forms.Label();
            this.arbiWeight = new System.Windows.Forms.Label();
            this.txtFeet = new System.Windows.Forms.TextBox();
            this.txtInches = new System.Windows.Forms.TextBox();
            this.txtWeight = new System.Windows.Forms.TextBox();
            this.btnQUIT = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.line = new System.Windows.Forms.Label();
            this.arbiBMI = new System.Windows.Forms.Label();
            this.txtBMI = new System.Windows.Forms.Label();
            this.lblAvgBMI = new System.Windows.Forms.Label();
            this.arbiAvgBMI = new System.Windows.Forms.Label();
            this.lblTotalPeople = new System.Windows.Forms.Label();
            this.arbiPeople = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // arbiFeet
            // 
            this.arbiFeet.AutoSize = true;
            this.arbiFeet.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.arbiFeet.Location = new System.Drawing.Point(128, 40);
            this.arbiFeet.Name = "arbiFeet";
            this.arbiFeet.Size = new System.Drawing.Size(71, 32);
            this.arbiFeet.TabIndex = 0;
            this.arbiFeet.Text = "Feet";
            this.arbiFeet.Click += new System.EventHandler(this.arbiFeet_Click);
            // 
            // arbiInches
            // 
            this.arbiInches.AutoSize = true;
            this.arbiInches.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.arbiInches.Location = new System.Drawing.Point(102, 91);
            this.arbiInches.Name = "arbiInches";
            this.arbiInches.Size = new System.Drawing.Size(97, 32);
            this.arbiInches.TabIndex = 1;
            this.arbiInches.Text = "Inches";
            this.arbiInches.Click += new System.EventHandler(this.arbiInches_Click);
            // 
            // arbiWeight
            // 
            this.arbiWeight.AutoSize = true;
            this.arbiWeight.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.arbiWeight.Location = new System.Drawing.Point(34, 136);
            this.arbiWeight.Name = "arbiWeight";
            this.arbiWeight.Size = new System.Drawing.Size(165, 32);
            this.arbiWeight.TabIndex = 2;
            this.arbiWeight.Text = "Weight (lbs)";
            this.arbiWeight.Click += new System.EventHandler(this.arbiWeight_Click);
            // 
            // txtFeet
            // 
            this.txtFeet.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtFeet.Location = new System.Drawing.Point(205, 34);
            this.txtFeet.Name = "txtFeet";
            this.txtFeet.Size = new System.Drawing.Size(231, 38);
            this.txtFeet.TabIndex = 3;
            this.txtFeet.TextChanged += new System.EventHandler(this.txtFeet_TextChanged);
            // 
            // txtInches
            // 
            this.txtInches.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtInches.Location = new System.Drawing.Point(205, 88);
            this.txtInches.Name = "txtInches";
            this.txtInches.Size = new System.Drawing.Size(231, 38);
            this.txtInches.TabIndex = 4;
            this.txtInches.TextChanged += new System.EventHandler(this.txtInches_TextChanged);
            // 
            // txtWeight
            // 
            this.txtWeight.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtWeight.Location = new System.Drawing.Point(205, 136);
            this.txtWeight.Name = "txtWeight";
            this.txtWeight.Size = new System.Drawing.Size(231, 38);
            this.txtWeight.TabIndex = 5;
            this.txtWeight.TextChanged += new System.EventHandler(this.txtWeight_TextChanged);
            // 
            // btnQUIT
            // 
            this.btnQUIT.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnQUIT.Location = new System.Drawing.Point(663, 29);
            this.btnQUIT.Name = "btnQUIT";
            this.btnQUIT.Size = new System.Drawing.Size(99, 45);
            this.btnQUIT.TabIndex = 6;
            this.btnQUIT.Text = "QUIT";
            this.btnQUIT.UseVisualStyleBackColor = true;
            this.btnQUIT.Click += new System.EventHandler(this.btnQUIT_Click);
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(507, 104);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(209, 45);
            this.button1.TabIndex = 7;
            this.button1.Text = "CALCULATE";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // line
            // 
            this.line.BackColor = System.Drawing.Color.Blue;
            this.line.Location = new System.Drawing.Point(-65, 202);
            this.line.Name = "line";
            this.line.Size = new System.Drawing.Size(923, 10);
            this.line.TabIndex = 8;
            // 
            // arbiBMI
            // 
            this.arbiBMI.AutoSize = true;
            this.arbiBMI.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.arbiBMI.Location = new System.Drawing.Point(29, 244);
            this.arbiBMI.Name = "arbiBMI";
            this.arbiBMI.Size = new System.Drawing.Size(166, 32);
            this.arbiBMI.TabIndex = 9;
            this.arbiBMI.Text = "Your BMI is:";
            // 
            // txtBMI
            // 
            this.txtBMI.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtBMI.Location = new System.Drawing.Point(201, 244);
            this.txtBMI.Name = "txtBMI";
            this.txtBMI.Size = new System.Drawing.Size(319, 32);
            this.txtBMI.TabIndex = 10;
            // 
            // lblAvgBMI
            // 
            this.lblAvgBMI.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblAvgBMI.Location = new System.Drawing.Point(219, 358);
            this.lblAvgBMI.Name = "lblAvgBMI";
            this.lblAvgBMI.Size = new System.Drawing.Size(319, 32);
            this.lblAvgBMI.TabIndex = 12;
            // 
            // arbiAvgBMI
            // 
            this.arbiAvgBMI.AutoSize = true;
            this.arbiAvgBMI.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.arbiAvgBMI.Location = new System.Drawing.Point(29, 358);
            this.arbiAvgBMI.Name = "arbiAvgBMI";
            this.arbiAvgBMI.Size = new System.Drawing.Size(184, 32);
            this.arbiAvgBMI.TabIndex = 11;
            this.arbiAvgBMI.Text = "Average BMI:";
            // 
            // lblTotalPeople
            // 
            this.lblTotalPeople.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTotalPeople.Location = new System.Drawing.Point(218, 412);
            this.lblTotalPeople.Name = "lblTotalPeople";
            this.lblTotalPeople.Size = new System.Drawing.Size(319, 32);
            this.lblTotalPeople.TabIndex = 14;
            this.lblTotalPeople.Click += new System.EventHandler(this.label3_Click);
            // 
            // arbiPeople
            // 
            this.arbiPeople.AutoSize = true;
            this.arbiPeople.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.arbiPeople.Location = new System.Drawing.Point(29, 412);
            this.arbiPeople.Name = "arbiPeople";
            this.arbiPeople.Size = new System.Drawing.Size(183, 32);
            this.arbiPeople.TabIndex = 13;
            this.arbiPeople.Text = "Total People:";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(830, 516);
            this.Controls.Add(this.lblTotalPeople);
            this.Controls.Add(this.arbiPeople);
            this.Controls.Add(this.lblAvgBMI);
            this.Controls.Add(this.arbiAvgBMI);
            this.Controls.Add(this.txtBMI);
            this.Controls.Add(this.arbiBMI);
            this.Controls.Add(this.line);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.btnQUIT);
            this.Controls.Add(this.txtWeight);
            this.Controls.Add(this.txtInches);
            this.Controls.Add(this.txtFeet);
            this.Controls.Add(this.arbiWeight);
            this.Controls.Add(this.arbiInches);
            this.Controls.Add(this.arbiFeet);
            this.Name = "Form1";
            this.Text = "Calculate BMI";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label arbiFeet;
        private System.Windows.Forms.Label arbiInches;
        private System.Windows.Forms.Label arbiWeight;
        private System.Windows.Forms.TextBox txtFeet;
        private System.Windows.Forms.TextBox txtInches;
        private System.Windows.Forms.TextBox txtWeight;
        private System.Windows.Forms.Button btnQUIT;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label line;
        private System.Windows.Forms.Label arbiBMI;
        private System.Windows.Forms.Label txtBMI;
        private System.Windows.Forms.Label lblAvgBMI;
        private System.Windows.Forms.Label arbiAvgBMI;
        private System.Windows.Forms.Label lblTotalPeople;
        private System.Windows.Forms.Label arbiPeople;
    }
}

