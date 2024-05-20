namespace concatination
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
            this.components = new System.ComponentModel.Container();
            this.phrase = new System.Windows.Forms.Label();
            this.button_PUSH = new System.Windows.Forms.Button();
            this.textName = new System.Windows.Forms.TextBox();
            this.textColor = new System.Windows.Forms.TextBox();
            this.lblName = new System.Windows.Forms.Label();
            this.QUIT = new System.Windows.Forms.Button();
            this.lblColor = new System.Windows.Forms.Label();
            this.colorDialog1 = new System.Windows.Forms.ColorDialog();
            this.button_COLOR = new System.Windows.Forms.Button();
            this.fontDialog1 = new System.Windows.Forms.FontDialog();
            this.button_FONT = new System.Windows.Forms.Button();
            this.kek = new System.Windows.Forms.Label();
            this.colorDialog2 = new System.Windows.Forms.ColorDialog();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.time = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // phrase
            // 
            this.phrase.Font = new System.Drawing.Font("Microsoft Sans Serif", 25.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.phrase.Location = new System.Drawing.Point(44, 38);
            this.phrase.Name = "phrase";
            this.phrase.Size = new System.Drawing.Size(601, 73);
            this.phrase.TabIndex = 0;
            this.phrase.Text = "Concatination";
            this.phrase.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.phrase.Click += new System.EventHandler(this.phrase_Click);
            // 
            // button_PUSH
            // 
            this.button_PUSH.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button_PUSH.Location = new System.Drawing.Point(35, 365);
            this.button_PUSH.Name = "button_PUSH";
            this.button_PUSH.Size = new System.Drawing.Size(213, 44);
            this.button_PUSH.TabIndex = 1;
            this.button_PUSH.Text = "PUSH";
            this.button_PUSH.UseVisualStyleBackColor = true;
            this.button_PUSH.Click += new System.EventHandler(this.button_PUSH_Click);
            // 
            // textName
            // 
            this.textName.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textName.Location = new System.Drawing.Point(182, 175);
            this.textName.Name = "textName";
            this.textName.Size = new System.Drawing.Size(287, 38);
            this.textName.TabIndex = 2;
            this.textName.TextChanged += new System.EventHandler(this.textName_TextChanged);
            // 
            // textColor
            // 
            this.textColor.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textColor.Location = new System.Drawing.Point(182, 248);
            this.textColor.Name = "textColor";
            this.textColor.Size = new System.Drawing.Size(287, 38);
            this.textColor.TabIndex = 3;
            this.textColor.TextChanged += new System.EventHandler(this.textBox2_TextChanged);
            // 
            // lblName
            // 
            this.lblName.AutoSize = true;
            this.lblName.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblName.Location = new System.Drawing.Point(12, 178);
            this.lblName.Name = "lblName";
            this.lblName.Size = new System.Drawing.Size(164, 32);
            this.lblName.TabIndex = 4;
            this.lblName.Text = "Enter Name";
            // 
            // QUIT
            // 
            this.QUIT.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.QUIT.Location = new System.Drawing.Point(677, 12);
            this.QUIT.Name = "QUIT";
            this.QUIT.Size = new System.Drawing.Size(111, 83);
            this.QUIT.TabIndex = 5;
            this.QUIT.Text = "QUIT";
            this.QUIT.UseVisualStyleBackColor = true;
            this.QUIT.Click += new System.EventHandler(this.QUIT_Click);
            // 
            // lblColor
            // 
            this.lblColor.AutoSize = true;
            this.lblColor.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblColor.Location = new System.Drawing.Point(12, 254);
            this.lblColor.Name = "lblColor";
            this.lblColor.Size = new System.Drawing.Size(157, 32);
            this.lblColor.TabIndex = 6;
            this.lblColor.Text = "Enter Color";
            // 
            // button_COLOR
            // 
            this.button_COLOR.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button_COLOR.Location = new System.Drawing.Point(268, 365);
            this.button_COLOR.Name = "button_COLOR";
            this.button_COLOR.Size = new System.Drawing.Size(165, 44);
            this.button_COLOR.TabIndex = 7;
            this.button_COLOR.Text = "COLOR";
            this.button_COLOR.UseVisualStyleBackColor = true;
            this.button_COLOR.Click += new System.EventHandler(this.button1_Click);
            // 
            // button_FONT
            // 
            this.button_FONT.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button_FONT.Location = new System.Drawing.Point(465, 365);
            this.button_FONT.Name = "button_FONT";
            this.button_FONT.Size = new System.Drawing.Size(189, 44);
            this.button_FONT.TabIndex = 8;
            this.button_FONT.Text = "FONT";
            this.button_FONT.UseVisualStyleBackColor = true;
            this.button_FONT.Click += new System.EventHandler(this.button_FONT_Click);
            // 
            // kek
            // 
            this.kek.AutoSize = true;
            this.kek.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.kek.Location = new System.Drawing.Point(176, 289);
            this.kek.Name = "kek";
            this.kek.Size = new System.Drawing.Size(304, 32);
            this.kek.TabIndex = 9;
            this.kek.Text = "L + Ratio + wrong input";
            this.kek.Visible = false;
            this.kek.Click += new System.EventHandler(this.label1_Click);
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Interval = 1;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // time
            // 
            this.time.AllowDrop = true;
            this.time.AutoSize = true;
            this.time.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.time.Location = new System.Drawing.Point(577, 237);
            this.time.Name = "time";
            this.time.Size = new System.Drawing.Size(92, 32);
            this.time.TabIndex = 10;
            this.time.Text = "Time: ";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.time);
            this.Controls.Add(this.kek);
            this.Controls.Add(this.button_FONT);
            this.Controls.Add(this.button_COLOR);
            this.Controls.Add(this.lblColor);
            this.Controls.Add(this.QUIT);
            this.Controls.Add(this.lblName);
            this.Controls.Add(this.textColor);
            this.Controls.Add(this.textName);
            this.Controls.Add(this.button_PUSH);
            this.Controls.Add(this.phrase);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label phrase;
        private System.Windows.Forms.Button button_PUSH;
        private System.Windows.Forms.TextBox textName;
        private System.Windows.Forms.TextBox textColor;
        private System.Windows.Forms.Label lblName;
        private System.Windows.Forms.Button QUIT;
        private System.Windows.Forms.Label lblColor;
        private System.Windows.Forms.ColorDialog colorDialog1;
        private System.Windows.Forms.Button button_COLOR;
        private System.Windows.Forms.FontDialog fontDialog1;
        private System.Windows.Forms.Button button_FONT;
        private System.Windows.Forms.Label kek;
        private System.Windows.Forms.ColorDialog colorDialog2;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Label time;
    }
}

