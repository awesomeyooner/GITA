namespace Triangle_Calculator
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
            this.btnCalculate = new System.Windows.Forms.Button();
            this.btnQuit = new System.Windows.Forms.Button();
            this.txtLength3 = new System.Windows.Forms.TextBox();
            this.txtLength1 = new System.Windows.Forms.TextBox();
            this.txtLength2 = new System.Windows.Forms.TextBox();
            this.lblLength1 = new System.Windows.Forms.Label();
            this.lblLength2 = new System.Windows.Forms.Label();
            this.lblLength3 = new System.Windows.Forms.Label();
            this.lblOutput = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btnCalculate
            // 
            this.btnCalculate.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnCalculate.Location = new System.Drawing.Point(550, 12);
            this.btnCalculate.Name = "btnCalculate";
            this.btnCalculate.Size = new System.Drawing.Size(238, 62);
            this.btnCalculate.TabIndex = 0;
            this.btnCalculate.Text = "DO THE THING";
            this.btnCalculate.UseVisualStyleBackColor = true;
            this.btnCalculate.Click += new System.EventHandler(this.btnCalculate_Click);
            // 
            // btnQuit
            // 
            this.btnQuit.Font = new System.Drawing.Font("Segoe UI", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnQuit.Location = new System.Drawing.Point(403, 12);
            this.btnQuit.Name = "btnQuit";
            this.btnQuit.Size = new System.Drawing.Size(111, 62);
            this.btnQuit.TabIndex = 1;
            this.btnQuit.Text = "QUIT";
            this.btnQuit.UseVisualStyleBackColor = true;
            this.btnQuit.Click += new System.EventHandler(this.btnQuit_Click);
            // 
            // txtLength3
            // 
            this.txtLength3.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtLength3.Location = new System.Drawing.Point(143, 227);
            this.txtLength3.Name = "txtLength3";
            this.txtLength3.Size = new System.Drawing.Size(178, 43);
            this.txtLength3.TabIndex = 2;
            // 
            // txtLength1
            // 
            this.txtLength1.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtLength1.Location = new System.Drawing.Point(143, 118);
            this.txtLength1.Name = "txtLength1";
            this.txtLength1.Size = new System.Drawing.Size(178, 43);
            this.txtLength1.TabIndex = 3;
            // 
            // txtLength2
            // 
            this.txtLength2.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtLength2.Location = new System.Drawing.Point(143, 176);
            this.txtLength2.Name = "txtLength2";
            this.txtLength2.Size = new System.Drawing.Size(178, 43);
            this.txtLength2.TabIndex = 4;
            // 
            // lblLength1
            // 
            this.lblLength1.AutoSize = true;
            this.lblLength1.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblLength1.Location = new System.Drawing.Point(12, 118);
            this.lblLength1.Name = "lblLength1";
            this.lblLength1.Size = new System.Drawing.Size(125, 38);
            this.lblLength1.TabIndex = 5;
            this.lblLength1.Text = "Length 1";
            // 
            // lblLength2
            // 
            this.lblLength2.AutoSize = true;
            this.lblLength2.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblLength2.Location = new System.Drawing.Point(12, 176);
            this.lblLength2.Name = "lblLength2";
            this.lblLength2.Size = new System.Drawing.Size(125, 38);
            this.lblLength2.TabIndex = 6;
            this.lblLength2.Text = "Length 2";
            // 
            // lblLength3
            // 
            this.lblLength3.AutoSize = true;
            this.lblLength3.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblLength3.Location = new System.Drawing.Point(12, 227);
            this.lblLength3.Name = "lblLength3";
            this.lblLength3.Size = new System.Drawing.Size(125, 38);
            this.lblLength3.TabIndex = 7;
            this.lblLength3.Text = "Length 3";
            // 
            // lblOutput
            // 
            this.lblOutput.AutoSize = true;
            this.lblOutput.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblOutput.Location = new System.Drawing.Point(364, 133);
            this.lblOutput.Name = "lblOutput";
            this.lblOutput.Size = new System.Drawing.Size(0, 28);
            this.lblOutput.TabIndex = 8;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(967, 638);
            this.Controls.Add(this.lblOutput);
            this.Controls.Add(this.lblLength3);
            this.Controls.Add(this.lblLength2);
            this.Controls.Add(this.lblLength1);
            this.Controls.Add(this.txtLength2);
            this.Controls.Add(this.txtLength1);
            this.Controls.Add(this.txtLength3);
            this.Controls.Add(this.btnQuit);
            this.Controls.Add(this.btnCalculate);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button btnCalculate;
        private Button btnQuit;
        private TextBox txtLength3;
        private TextBox txtLength1;
        private TextBox txtLength2;
        private Label lblLength1;
        private Label lblLength2;
        private Label lblLength3;
        private Label lblOutput;
    }
}