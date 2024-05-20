namespace arrays
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
            this.components = new System.ComponentModel.Container();
            this.picBox0 = new System.Windows.Forms.PictureBox();
            this.picBox1 = new System.Windows.Forms.PictureBox();
            this.picBox2 = new System.Windows.Forms.PictureBox();
            this.picBox3 = new System.Windows.Forms.PictureBox();
            this.picPB = new System.Windows.Forms.PictureBox();
            this.btnMove = new System.Windows.Forms.Button();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.btnAuto = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.picBox0)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBox2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBox3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPB)).BeginInit();
            this.SuspendLayout();
            // 
            // picBox0
            // 
            this.picBox0.Location = new System.Drawing.Point(45, 102);
            this.picBox0.Name = "picBox0";
            this.picBox0.Size = new System.Drawing.Size(125, 62);
            this.picBox0.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picBox0.TabIndex = 0;
            this.picBox0.TabStop = false;
            // 
            // picBox1
            // 
            this.picBox1.Location = new System.Drawing.Point(192, 102);
            this.picBox1.Name = "picBox1";
            this.picBox1.Size = new System.Drawing.Size(125, 62);
            this.picBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picBox1.TabIndex = 1;
            this.picBox1.TabStop = false;
            // 
            // picBox2
            // 
            this.picBox2.Location = new System.Drawing.Point(344, 102);
            this.picBox2.Name = "picBox2";
            this.picBox2.Size = new System.Drawing.Size(125, 62);
            this.picBox2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picBox2.TabIndex = 2;
            this.picBox2.TabStop = false;
            // 
            // picBox3
            // 
            this.picBox3.Location = new System.Drawing.Point(515, 102);
            this.picBox3.Name = "picBox3";
            this.picBox3.Size = new System.Drawing.Size(125, 62);
            this.picBox3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picBox3.TabIndex = 3;
            this.picBox3.TabStop = false;
            // 
            // picPB
            // 
            this.picPB.Image = global::arrays.Properties.Resources.smoile;
            this.picPB.Location = new System.Drawing.Point(301, 234);
            this.picPB.Name = "picPB";
            this.picPB.Size = new System.Drawing.Size(244, 184);
            this.picPB.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picPB.TabIndex = 4;
            this.picPB.TabStop = false;
            this.picPB.Visible = false;
            // 
            // btnMove
            // 
            this.btnMove.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnMove.Location = new System.Drawing.Point(24, 298);
            this.btnMove.Name = "btnMove";
            this.btnMove.Size = new System.Drawing.Size(133, 84);
            this.btnMove.TabIndex = 5;
            this.btnMove.Text = "MOVE";
            this.btnMove.UseVisualStyleBackColor = true;
            this.btnMove.Click += new System.EventHandler(this.btnMove_Click);
            // 
            // timer1
            // 
            this.timer1.Interval = 1000;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // btnAuto
            // 
            this.btnAuto.Font = new System.Drawing.Font("Comic Sans MS", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnAuto.Location = new System.Drawing.Point(24, 208);
            this.btnAuto.Name = "btnAuto";
            this.btnAuto.Size = new System.Drawing.Size(133, 84);
            this.btnAuto.TabIndex = 6;
            this.btnAuto.Text = "AUTO";
            this.btnAuto.UseVisualStyleBackColor = true;
            this.btnAuto.Click += new System.EventHandler(this.btnAuto_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnAuto);
            this.Controls.Add(this.btnMove);
            this.Controls.Add(this.picPB);
            this.Controls.Add(this.picBox3);
            this.Controls.Add(this.picBox2);
            this.Controls.Add(this.picBox1);
            this.Controls.Add(this.picBox0);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.picBox0)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBox2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBox3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picPB)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private PictureBox picBox0;
        private PictureBox picBox1;
        private PictureBox picBox2;
        private PictureBox picBox3;
        private PictureBox picPB;
        private Button btnMove;
        private System.Windows.Forms.Timer timer1;
        private Button btnAuto;
    }
}