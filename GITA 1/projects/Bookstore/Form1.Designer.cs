namespace Bookstore
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
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.txtTitle = new System.Windows.Forms.TextBox();
            this.txtQuantity = new System.Windows.Forms.TextBox();
            this.txtPrice = new System.Windows.Forms.TextBox();
            this.line = new System.Windows.Forms.Label();
            this.lblExtendedPrice = new System.Windows.Forms.Label();
            this.lblDiscoutAmount = new System.Windows.Forms.Label();
            this.lblDiscountPrice = new System.Windows.Forms.Label();
            this.txtExtendedPrice = new System.Windows.Forms.TextBox();
            this.txtDiscountAmount = new System.Windows.Forms.TextBox();
            this.txtDiscountPrice = new System.Windows.Forms.TextBox();
            this.btnCalculate = new System.Windows.Forms.Button();
            this.btnQUIT = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.lblTotalPeople = new System.Windows.Forms.Label();
            this.lblTotalSales = new System.Windows.Forms.Label();
            this.lblAverageSales = new System.Windows.Forms.Label();
            this.l = new System.Windows.Forms.Label();
            this.btnClear = new System.Windows.Forms.Button();
            this.label9 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(65, 38);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(70, 38);
            this.label1.TabIndex = 0;
            this.label1.Text = "Title";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(419, 101);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(78, 38);
            this.label2.TabIndex = 1;
            this.label2.Text = "Price";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label3.Location = new System.Drawing.Point(12, 101);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(123, 38);
            this.label3.TabIndex = 2;
            this.label3.Text = "Quantity";
            // 
            // txtTitle
            // 
            this.txtTitle.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtTitle.Location = new System.Drawing.Point(141, 35);
            this.txtTitle.Name = "txtTitle";
            this.txtTitle.Size = new System.Drawing.Size(259, 43);
            this.txtTitle.TabIndex = 3;
            this.txtTitle.TextChanged += new System.EventHandler(this.txtTitle_TextChanged);
            // 
            // txtQuantity
            // 
            this.txtQuantity.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtQuantity.Location = new System.Drawing.Point(141, 101);
            this.txtQuantity.Name = "txtQuantity";
            this.txtQuantity.Size = new System.Drawing.Size(259, 43);
            this.txtQuantity.TabIndex = 4;
            // 
            // txtPrice
            // 
            this.txtPrice.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtPrice.Location = new System.Drawing.Point(503, 101);
            this.txtPrice.Name = "txtPrice";
            this.txtPrice.Size = new System.Drawing.Size(259, 43);
            this.txtPrice.TabIndex = 5;
            // 
            // line
            // 
            this.line.AutoSize = true;
            this.line.BackColor = System.Drawing.Color.Blue;
            this.line.Location = new System.Drawing.Point(219, 246);
            this.line.Name = "line";
            this.line.Size = new System.Drawing.Size(0, 20);
            this.line.TabIndex = 6;
            // 
            // lblExtendedPrice
            // 
            this.lblExtendedPrice.AutoSize = true;
            this.lblExtendedPrice.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblExtendedPrice.Location = new System.Drawing.Point(45, 244);
            this.lblExtendedPrice.Name = "lblExtendedPrice";
            this.lblExtendedPrice.Size = new System.Drawing.Size(200, 38);
            this.lblExtendedPrice.TabIndex = 7;
            this.lblExtendedPrice.Text = "Extended Price";
            // 
            // lblDiscoutAmount
            // 
            this.lblDiscoutAmount.AutoSize = true;
            this.lblDiscoutAmount.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblDiscoutAmount.Location = new System.Drawing.Point(12, 299);
            this.lblDiscoutAmount.Name = "lblDiscoutAmount";
            this.lblDiscoutAmount.Size = new System.Drawing.Size(233, 38);
            this.lblDiscoutAmount.TabIndex = 8;
            this.lblDiscoutAmount.Text = "Discount Amount";
            // 
            // lblDiscountPrice
            // 
            this.lblDiscountPrice.AutoSize = true;
            this.lblDiscountPrice.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblDiscountPrice.Location = new System.Drawing.Point(45, 359);
            this.lblDiscountPrice.Name = "lblDiscountPrice";
            this.lblDiscountPrice.Size = new System.Drawing.Size(195, 38);
            this.lblDiscountPrice.TabIndex = 9;
            this.lblDiscountPrice.Text = "Discount Price";
            // 
            // txtExtendedPrice
            // 
            this.txtExtendedPrice.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtExtendedPrice.Location = new System.Drawing.Point(251, 246);
            this.txtExtendedPrice.Name = "txtExtendedPrice";
            this.txtExtendedPrice.Size = new System.Drawing.Size(193, 43);
            this.txtExtendedPrice.TabIndex = 10;
            // 
            // txtDiscountAmount
            // 
            this.txtDiscountAmount.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtDiscountAmount.Location = new System.Drawing.Point(251, 299);
            this.txtDiscountAmount.Name = "txtDiscountAmount";
            this.txtDiscountAmount.Size = new System.Drawing.Size(193, 43);
            this.txtDiscountAmount.TabIndex = 11;
            // 
            // txtDiscountPrice
            // 
            this.txtDiscountPrice.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtDiscountPrice.Location = new System.Drawing.Point(251, 359);
            this.txtDiscountPrice.Name = "txtDiscountPrice";
            this.txtDiscountPrice.Size = new System.Drawing.Size(193, 43);
            this.txtDiscountPrice.TabIndex = 12;
            // 
            // btnCalculate
            // 
            this.btnCalculate.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnCalculate.Location = new System.Drawing.Point(545, 289);
            this.btnCalculate.Name = "btnCalculate";
            this.btnCalculate.Size = new System.Drawing.Size(186, 48);
            this.btnCalculate.TabIndex = 13;
            this.btnCalculate.Text = "CALCULATE";
            this.btnCalculate.UseVisualStyleBackColor = true;
            this.btnCalculate.Click += new System.EventHandler(this.btnCalculate_Click);
            // 
            // btnQUIT
            // 
            this.btnQUIT.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnQUIT.Location = new System.Drawing.Point(701, 26);
            this.btnQUIT.Name = "btnQUIT";
            this.btnQUIT.Size = new System.Drawing.Size(74, 50);
            this.btnQUIT.TabIndex = 14;
            this.btnQUIT.Text = "QUIT";
            this.btnQUIT.UseVisualStyleBackColor = true;
            this.btnQUIT.Click += new System.EventHandler(this.btnQUIT_Click);
            // 
            // label5
            // 
            this.label5.BackColor = System.Drawing.Color.Blue;
            this.label5.Location = new System.Drawing.Point(0, 222);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(800, 10);
            this.label5.TabIndex = 16;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label4.Location = new System.Drawing.Point(69, 594);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(176, 38);
            this.label4.TabIndex = 20;
            this.label4.Text = "Average Sale";
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label6.Location = new System.Drawing.Point(99, 534);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(146, 38);
            this.label6.TabIndex = 19;
            this.label6.Text = "Total Sales";
            this.label6.Click += new System.EventHandler(this.label6_Click);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label7.Location = new System.Drawing.Point(78, 481);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(167, 38);
            this.label7.TabIndex = 18;
            this.label7.Text = "Total People";
            this.label7.Click += new System.EventHandler(this.label7_Click);
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.BackColor = System.Drawing.Color.Blue;
            this.label8.Location = new System.Drawing.Point(202, 481);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(0, 20);
            this.label8.TabIndex = 17;
            this.label8.Click += new System.EventHandler(this.label8_Click);
            // 
            // lblTotalPeople
            // 
            this.lblTotalPeople.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.lblTotalPeople.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblTotalPeople.Location = new System.Drawing.Point(251, 481);
            this.lblTotalPeople.Name = "lblTotalPeople";
            this.lblTotalPeople.Size = new System.Drawing.Size(274, 38);
            this.lblTotalPeople.TabIndex = 24;
            // 
            // lblTotalSales
            // 
            this.lblTotalSales.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.lblTotalSales.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblTotalSales.Location = new System.Drawing.Point(251, 534);
            this.lblTotalSales.Name = "lblTotalSales";
            this.lblTotalSales.Size = new System.Drawing.Size(274, 38);
            this.lblTotalSales.TabIndex = 25;
            // 
            // lblAverageSales
            // 
            this.lblAverageSales.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.lblAverageSales.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblAverageSales.Location = new System.Drawing.Point(251, 594);
            this.lblAverageSales.Name = "lblAverageSales";
            this.lblAverageSales.Size = new System.Drawing.Size(274, 38);
            this.lblAverageSales.TabIndex = 26;
            // 
            // l
            // 
            this.l.BackColor = System.Drawing.SystemColors.Control;
            this.l.Font = new System.Drawing.Font("Segoe UI", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.l.Location = new System.Drawing.Point(78, 443);
            this.l.Name = "l";
            this.l.Size = new System.Drawing.Size(274, 38);
            this.l.TabIndex = 27;
            this.l.Text = "Manager Stats";
            // 
            // btnClear
            // 
            this.btnClear.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnClear.Location = new System.Drawing.Point(545, 368);
            this.btnClear.Name = "btnClear";
            this.btnClear.Size = new System.Drawing.Size(186, 48);
            this.btnClear.TabIndex = 28;
            this.btnClear.Text = "CLEAR";
            this.btnClear.UseVisualStyleBackColor = true;
            this.btnClear.Click += new System.EventHandler(this.btnClear_Click);
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(580, 0);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(50, 20);
            this.label9.TabIndex = 29;
            this.label9.Text = "label9";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.ClientSize = new System.Drawing.Size(800, 666);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.btnClear);
            this.Controls.Add(this.l);
            this.Controls.Add(this.lblAverageSales);
            this.Controls.Add(this.lblTotalSales);
            this.Controls.Add(this.lblTotalPeople);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.btnQUIT);
            this.Controls.Add(this.btnCalculate);
            this.Controls.Add(this.txtDiscountPrice);
            this.Controls.Add(this.txtDiscountAmount);
            this.Controls.Add(this.txtExtendedPrice);
            this.Controls.Add(this.lblDiscountPrice);
            this.Controls.Add(this.lblDiscoutAmount);
            this.Controls.Add(this.lblExtendedPrice);
            this.Controls.Add(this.line);
            this.Controls.Add(this.txtPrice);
            this.Controls.Add(this.txtQuantity);
            this.Controls.Add(this.txtTitle);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Label label1;
        private Label label2;
        private Label label3;
        private TextBox txtTitle;
        private TextBox txtQuantity;
        private TextBox txtPrice;
        private Label line;
        private Label lblExtendedPrice;
        private Label lblDiscoutAmount;
        private Label lblDiscountPrice;
        private TextBox txtExtendedPrice;
        private TextBox txtDiscountAmount;
        private TextBox txtDiscountPrice;
        private Button btnCalculate;
        private Button btnQUIT;
        private Label label5;
        private Label label4;
        private Label label6;
        private Label label7;
        private Label label8;
        private Label lblTotalPeople;
        private Label lblTotalSales;
        private Label lblAverageSales;
        private Label l;
        private Button btnClear;
        private Label label9;
    }
}