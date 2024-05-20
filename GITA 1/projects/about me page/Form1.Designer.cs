namespace about_me_page
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
            this.QUIT = new System.Windows.Forms.Button();
            this.buttonLogo = new System.Windows.Forms.Button();
            this.buttonTrademark = new System.Windows.Forms.Button();
            this.textTradeMark = new System.Windows.Forms.TextBox();
            this.buttonAbout = new System.Windows.Forms.Button();
            this.textAbout = new System.Windows.Forms.TextBox();
            this.buttonClear = new System.Windows.Forms.Button();
            this.buttonFont = new System.Windows.Forms.Button();
            this.buttonColor = new System.Windows.Forms.Button();
            this.colorDialog1 = new System.Windows.Forms.ColorDialog();
            this.fontDialog1 = new System.Windows.Forms.FontDialog();
            this.buttonPush = new System.Windows.Forms.Button();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.textCaption = new System.Windows.Forms.TextBox();
            this.picThumbsUp = new System.Windows.Forms.PictureBox();
            this.picThief = new System.Windows.Forms.PictureBox();
            this.picLogo = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.picThumbsUp)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picThief)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picLogo)).BeginInit();
            this.SuspendLayout();
            // 
            // QUIT
            // 
            this.QUIT.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.QUIT.Location = new System.Drawing.Point(691, 62);
            this.QUIT.Name = "QUIT";
            this.QUIT.Size = new System.Drawing.Size(96, 56);
            this.QUIT.TabIndex = 0;
            this.QUIT.Text = "QUIT";
            this.QUIT.UseVisualStyleBackColor = true;
            this.QUIT.Click += new System.EventHandler(this.QUIT_Click);
            // 
            // buttonLogo
            // 
            this.buttonLogo.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonLogo.Location = new System.Drawing.Point(1, 62);
            this.buttonLogo.Name = "buttonLogo";
            this.buttonLogo.Size = new System.Drawing.Size(179, 56);
            this.buttonLogo.TabIndex = 1;
            this.buttonLogo.Text = "Show Logo";
            this.buttonLogo.UseVisualStyleBackColor = true;
            this.buttonLogo.Click += new System.EventHandler(this.buttonLogo_Click);
            // 
            // buttonTrademark
            // 
            this.buttonTrademark.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonTrademark.Location = new System.Drawing.Point(186, 62);
            this.buttonTrademark.Name = "buttonTrademark";
            this.buttonTrademark.Size = new System.Drawing.Size(263, 56);
            this.buttonTrademark.TabIndex = 3;
            this.buttonTrademark.Text = "Show TradeMark";
            this.buttonTrademark.UseVisualStyleBackColor = true;
            this.buttonTrademark.Click += new System.EventHandler(this.button1_Click);
            // 
            // textTradeMark
            // 
            this.textTradeMark.Font = new System.Drawing.Font("Comic Sans MS", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textTradeMark.Location = new System.Drawing.Point(172, 191);
            this.textTradeMark.Multiline = true;
            this.textTradeMark.Name = "textTradeMark";
            this.textTradeMark.Size = new System.Drawing.Size(498, 66);
            this.textTradeMark.TabIndex = 4;
            this.textTradeMark.Text = "Seeing What\'s Hidden";
            this.textTradeMark.Visible = false;
            // 
            // buttonAbout
            // 
            this.buttonAbout.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonAbout.Location = new System.Drawing.Point(448, 62);
            this.buttonAbout.Name = "buttonAbout";
            this.buttonAbout.Size = new System.Drawing.Size(122, 56);
            this.buttonAbout.TabIndex = 5;
            this.buttonAbout.Text = "About";
            this.buttonAbout.UseVisualStyleBackColor = true;
            this.buttonAbout.Click += new System.EventHandler(this.buttonAbout_Click);
            // 
            // textAbout
            // 
            this.textAbout.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textAbout.ForeColor = System.Drawing.SystemColors.MenuText;
            this.textAbout.Location = new System.Drawing.Point(142, 146);
            this.textAbout.Multiline = true;
            this.textAbout.Name = "textAbout";
            this.textAbout.Size = new System.Drawing.Size(394, 218);
            this.textAbout.TabIndex = 6;
            this.textAbout.Text = "We are a small company based in Gravity Falls, Oregon. Our purpose is to grab dat" +
    "a from \"protected\" networks and services.";
            this.textAbout.Visible = false;
            this.textAbout.TextChanged += new System.EventHandler(this.textAbout_TextChanged);
            // 
            // buttonClear
            // 
            this.buttonClear.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonClear.Location = new System.Drawing.Point(565, 62);
            this.buttonClear.Name = "buttonClear";
            this.buttonClear.Size = new System.Drawing.Size(131, 56);
            this.buttonClear.TabIndex = 7;
            this.buttonClear.Text = "CLEAR";
            this.buttonClear.UseVisualStyleBackColor = true;
            this.buttonClear.Click += new System.EventHandler(this.buttonClear_Click);
            // 
            // buttonFont
            // 
            this.buttonFont.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonFont.Location = new System.Drawing.Point(677, 392);
            this.buttonFont.Name = "buttonFont";
            this.buttonFont.Size = new System.Drawing.Size(111, 46);
            this.buttonFont.TabIndex = 8;
            this.buttonFont.Text = "FONT";
            this.buttonFont.UseVisualStyleBackColor = true;
            this.buttonFont.Click += new System.EventHandler(this.buttonFont_Click);
            // 
            // buttonColor
            // 
            this.buttonColor.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonColor.Location = new System.Drawing.Point(663, 338);
            this.buttonColor.Name = "buttonColor";
            this.buttonColor.Size = new System.Drawing.Size(135, 48);
            this.buttonColor.TabIndex = 9;
            this.buttonColor.Text = "COLOR";
            this.buttonColor.UseVisualStyleBackColor = true;
            this.buttonColor.Click += new System.EventHandler(this.buttonColor_Click);
            // 
            // buttonPush
            // 
            this.buttonPush.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonPush.Location = new System.Drawing.Point(663, 285);
            this.buttonPush.Name = "buttonPush";
            this.buttonPush.Size = new System.Drawing.Size(125, 47);
            this.buttonPush.TabIndex = 10;
            this.buttonPush.Text = "PUSH";
            this.buttonPush.UseVisualStyleBackColor = true;
            this.buttonPush.Click += new System.EventHandler(this.buttonPush_Click);
            // 
            // textBox1
            // 
            this.textBox1.BackColor = System.Drawing.SystemColors.MenuText;
            this.textBox1.Location = new System.Drawing.Point(1, 117);
            this.textBox1.Multiline = true;
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(796, 8);
            this.textBox1.TabIndex = 11;
            // 
            // textCaption
            // 
            this.textCaption.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textCaption.Location = new System.Drawing.Point(13, 13);
            this.textCaption.Name = "textCaption";
            this.textCaption.Size = new System.Drawing.Size(774, 45);
            this.textCaption.TabIndex = 12;
            this.textCaption.Text = "About Me Page";
            // 
            // picThumbsUp
            // 
            this.picThumbsUp.Image = global::about_me_page.Properties.Resources.thumbs_up;
            this.picThumbsUp.Location = new System.Drawing.Point(266, 146);
            this.picThumbsUp.Name = "picThumbsUp";
            this.picThumbsUp.Size = new System.Drawing.Size(235, 292);
            this.picThumbsUp.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picThumbsUp.TabIndex = 14;
            this.picThumbsUp.TabStop = false;
            this.picThumbsUp.Visible = false;
            this.picThumbsUp.Click += new System.EventHandler(this.picThumbsUp_Click);
            // 
            // picThief
            // 
            this.picThief.Image = global::about_me_page.Properties.Resources.theft;
            this.picThief.Location = new System.Drawing.Point(309, 124);
            this.picThief.Name = "picThief";
            this.picThief.Size = new System.Drawing.Size(192, 314);
            this.picThief.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picThief.TabIndex = 13;
            this.picThief.TabStop = false;
            this.picThief.Visible = false;
            this.picThief.Click += new System.EventHandler(this.picThief_Click);
            // 
            // picLogo
            // 
            this.picLogo.Image = global::about_me_page.Properties.Resources.anonymous_alliance2;
            this.picLogo.Location = new System.Drawing.Point(142, 173);
            this.picLogo.Name = "picLogo";
            this.picLogo.Size = new System.Drawing.Size(319, 265);
            this.picLogo.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picLogo.TabIndex = 2;
            this.picLogo.TabStop = false;
            this.picLogo.Visible = false;
            this.picLogo.Click += new System.EventHandler(this.picLogo_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.picThumbsUp);
            this.Controls.Add(this.picThief);
            this.Controls.Add(this.textCaption);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.buttonPush);
            this.Controls.Add(this.buttonColor);
            this.Controls.Add(this.buttonFont);
            this.Controls.Add(this.buttonClear);
            this.Controls.Add(this.textAbout);
            this.Controls.Add(this.buttonAbout);
            this.Controls.Add(this.textTradeMark);
            this.Controls.Add(this.buttonTrademark);
            this.Controls.Add(this.picLogo);
            this.Controls.Add(this.buttonLogo);
            this.Controls.Add(this.QUIT);
            this.Name = "Form1";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.picThumbsUp)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picThief)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picLogo)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button QUIT;
        private System.Windows.Forms.Button buttonLogo;
        private System.Windows.Forms.PictureBox picLogo;
        private System.Windows.Forms.Button buttonTrademark;
        private System.Windows.Forms.TextBox textTradeMark;
        private System.Windows.Forms.Button buttonAbout;
        private System.Windows.Forms.TextBox textAbout;
        private System.Windows.Forms.Button buttonClear;
        private System.Windows.Forms.Button buttonFont;
        private System.Windows.Forms.Button buttonColor;
        private System.Windows.Forms.ColorDialog colorDialog1;
        private System.Windows.Forms.FontDialog fontDialog1;
        private System.Windows.Forms.Button buttonPush;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.TextBox textCaption;
        private System.Windows.Forms.PictureBox picThief;
        private System.Windows.Forms.PictureBox picThumbsUp;
    }
}

