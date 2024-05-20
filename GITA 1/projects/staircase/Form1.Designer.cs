namespace staircase
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
            this.btnClose = new System.Windows.Forms.Button();
            this.timer = new System.Windows.Forms.Timer(this.components);
            this.btnStart = new System.Windows.Forms.Button();
            this.txtDebug = new System.Windows.Forms.TextBox();
            this.picDoorMonster = new System.Windows.Forms.PictureBox();
            this.picDoorGhost = new System.Windows.Forms.PictureBox();
            this.picStair1 = new System.Windows.Forms.PictureBox();
            this.picDoorDown = new System.Windows.Forms.PictureBox();
            this.picDoorClosed = new System.Windows.Forms.PictureBox();
            this.picDoorUp = new System.Windows.Forms.PictureBox();
            this.picBerdLeft = new System.Windows.Forms.PictureBox();
            this.picBerdRight = new System.Windows.Forms.PictureBox();
            this.picStair8 = new System.Windows.Forms.PictureBox();
            this.picStair7 = new System.Windows.Forms.PictureBox();
            this.picStair6 = new System.Windows.Forms.PictureBox();
            this.picStair5 = new System.Windows.Forms.PictureBox();
            this.picStair4 = new System.Windows.Forms.PictureBox();
            this.picStair3 = new System.Windows.Forms.PictureBox();
            this.picStair2 = new System.Windows.Forms.PictureBox();
            this.picStair = new System.Windows.Forms.PictureBox();
            this.btnStats = new System.Windows.Forms.Button();
            this.btnAuto = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorMonster)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorGhost)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorDown)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorClosed)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorUp)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBerdLeft)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBerdRight)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair8)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair7)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair6)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair5)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair)).BeginInit();
            this.SuspendLayout();
            // 
            // btnClose
            // 
            this.btnClose.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnClose.Location = new System.Drawing.Point(593, 12);
            this.btnClose.Name = "btnClose";
            this.btnClose.Size = new System.Drawing.Size(116, 45);
            this.btnClose.TabIndex = 0;
            this.btnClose.Text = "QUIT";
            this.btnClose.UseVisualStyleBackColor = true;
            this.btnClose.Click += new System.EventHandler(this.btnClose_Click);
            // 
            // timer
            // 
            this.timer.Interval = 200;
            this.timer.Tick += new System.EventHandler(this.timer_Tick);
            // 
            // btnStart
            // 
            this.btnStart.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnStart.Location = new System.Drawing.Point(892, 11);
            this.btnStart.Name = "btnStart";
            this.btnStart.Size = new System.Drawing.Size(206, 45);
            this.btnStart.TabIndex = 1;
            this.btnStart.Text = "Start Moving";
            this.btnStart.UseVisualStyleBackColor = true;
            this.btnStart.Click += new System.EventHandler(this.btnStart_Click);
            // 
            // txtDebug
            // 
            this.txtDebug.Location = new System.Drawing.Point(283, 34);
            this.txtDebug.Name = "txtDebug";
            this.txtDebug.Size = new System.Drawing.Size(100, 22);
            this.txtDebug.TabIndex = 18;
            // 
            // picDoorMonster
            // 
            this.picDoorMonster.Image = global::staircase.Properties.Resources.door_monster;
            this.picDoorMonster.Location = new System.Drawing.Point(742, 768);
            this.picDoorMonster.Name = "picDoorMonster";
            this.picDoorMonster.Size = new System.Drawing.Size(189, 248);
            this.picDoorMonster.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picDoorMonster.TabIndex = 19;
            this.picDoorMonster.TabStop = false;
            this.picDoorMonster.Visible = false;
            // 
            // picDoorGhost
            // 
            this.picDoorGhost.Image = global::staircase.Properties.Resources.door_ghost;
            this.picDoorGhost.Location = new System.Drawing.Point(937, 801);
            this.picDoorGhost.Name = "picDoorGhost";
            this.picDoorGhost.Size = new System.Drawing.Size(227, 201);
            this.picDoorGhost.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picDoorGhost.TabIndex = 17;
            this.picDoorGhost.TabStop = false;
            this.picDoorGhost.Visible = false;
            // 
            // picStair1
            // 
            this.picStair1.Location = new System.Drawing.Point(99, 801);
            this.picStair1.Name = "picStair1";
            this.picStair1.Size = new System.Drawing.Size(86, 96);
            this.picStair1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair1.TabIndex = 11;
            this.picStair1.TabStop = false;
            // 
            // picDoorDown
            // 
            this.picDoorDown.Image = global::staircase.Properties.Resources.door_closed;
            this.picDoorDown.Location = new System.Drawing.Point(-7, 754);
            this.picDoorDown.Name = "picDoorDown";
            this.picDoorDown.Size = new System.Drawing.Size(151, 248);
            this.picDoorDown.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picDoorDown.TabIndex = 16;
            this.picDoorDown.TabStop = false;
            // 
            // picDoorClosed
            // 
            this.picDoorClosed.Image = global::staircase.Properties.Resources.door_closed;
            this.picDoorClosed.Location = new System.Drawing.Point(929, 754);
            this.picDoorClosed.Name = "picDoorClosed";
            this.picDoorClosed.Size = new System.Drawing.Size(151, 248);
            this.picDoorClosed.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picDoorClosed.TabIndex = 15;
            this.picDoorClosed.TabStop = false;
            this.picDoorClosed.Visible = false;
            // 
            // picDoorUp
            // 
            this.picDoorUp.Image = global::staircase.Properties.Resources.door_closed;
            this.picDoorUp.Location = new System.Drawing.Point(848, 79);
            this.picDoorUp.Name = "picDoorUp";
            this.picDoorUp.Size = new System.Drawing.Size(151, 248);
            this.picDoorUp.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picDoorUp.TabIndex = 14;
            this.picDoorUp.TabStop = false;
            // 
            // picBerdLeft
            // 
            this.picBerdLeft.Image = global::staircase.Properties.Resources.birdman_left;
            this.picBerdLeft.Location = new System.Drawing.Point(994, 550);
            this.picBerdLeft.Name = "picBerdLeft";
            this.picBerdLeft.Size = new System.Drawing.Size(86, 96);
            this.picBerdLeft.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picBerdLeft.TabIndex = 13;
            this.picBerdLeft.TabStop = false;
            this.picBerdLeft.Visible = false;
            // 
            // picBerdRight
            // 
            this.picBerdRight.Image = global::staircase.Properties.Resources.birdman;
            this.picBerdRight.Location = new System.Drawing.Point(994, 652);
            this.picBerdRight.Name = "picBerdRight";
            this.picBerdRight.Size = new System.Drawing.Size(86, 96);
            this.picBerdRight.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picBerdRight.TabIndex = 12;
            this.picBerdRight.TabStop = false;
            this.picBerdRight.Visible = false;
            // 
            // picStair8
            // 
            this.picStair8.Location = new System.Drawing.Point(756, 190);
            this.picStair8.Name = "picStair8";
            this.picStair8.Size = new System.Drawing.Size(86, 96);
            this.picStair8.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair8.TabIndex = 10;
            this.picStair8.TabStop = false;
            // 
            // picStair7
            // 
            this.picStair7.Location = new System.Drawing.Point(651, 274);
            this.picStair7.Name = "picStair7";
            this.picStair7.Size = new System.Drawing.Size(86, 96);
            this.picStair7.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair7.TabIndex = 9;
            this.picStair7.TabStop = false;
            // 
            // picStair6
            // 
            this.picStair6.Location = new System.Drawing.Point(559, 363);
            this.picStair6.Name = "picStair6";
            this.picStair6.Size = new System.Drawing.Size(86, 96);
            this.picStair6.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair6.TabIndex = 8;
            this.picStair6.TabStop = false;
            // 
            // picStair5
            // 
            this.picStair5.Location = new System.Drawing.Point(467, 448);
            this.picStair5.Name = "picStair5";
            this.picStair5.Size = new System.Drawing.Size(86, 96);
            this.picStair5.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair5.TabIndex = 7;
            this.picStair5.TabStop = false;
            // 
            // picStair4
            // 
            this.picStair4.Location = new System.Drawing.Point(375, 533);
            this.picStair4.Name = "picStair4";
            this.picStair4.Size = new System.Drawing.Size(86, 96);
            this.picStair4.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair4.TabIndex = 6;
            this.picStair4.TabStop = false;
            // 
            // picStair3
            // 
            this.picStair3.Location = new System.Drawing.Point(283, 625);
            this.picStair3.Name = "picStair3";
            this.picStair3.Size = new System.Drawing.Size(86, 96);
            this.picStair3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair3.TabIndex = 5;
            this.picStair3.TabStop = false;
            // 
            // picStair2
            // 
            this.picStair2.Location = new System.Drawing.Point(191, 708);
            this.picStair2.Name = "picStair2";
            this.picStair2.Size = new System.Drawing.Size(86, 96);
            this.picStair2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair2.TabIndex = 4;
            this.picStair2.TabStop = false;
            // 
            // picStair
            // 
            this.picStair.Image = global::staircase.Properties.Resources.stairs;
            this.picStair.Location = new System.Drawing.Point(27, 68);
            this.picStair.Name = "picStair";
            this.picStair.Size = new System.Drawing.Size(1109, 964);
            this.picStair.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picStair.TabIndex = 3;
            this.picStair.TabStop = false;
            // 
            // btnStats
            // 
            this.btnStats.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnStats.Location = new System.Drawing.Point(742, 17);
            this.btnStats.Name = "btnStats";
            this.btnStats.Size = new System.Drawing.Size(116, 45);
            this.btnStats.TabIndex = 20;
            this.btnStats.Text = "STATS";
            this.btnStats.UseVisualStyleBackColor = true;
            this.btnStats.Click += new System.EventHandler(this.btnStats_Click);
            // 
            // btnAuto
            // 
            this.btnAuto.Font = new System.Drawing.Font("Microsoft Sans Serif", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnAuto.Location = new System.Drawing.Point(1120, 11);
            this.btnAuto.Name = "btnAuto";
            this.btnAuto.Size = new System.Drawing.Size(206, 45);
            this.btnAuto.TabIndex = 21;
            this.btnAuto.Text = "Auto Move?";
            this.btnAuto.UseVisualStyleBackColor = true;
            this.btnAuto.Click += new System.EventHandler(this.btnAuto_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1673, 1055);
            this.Controls.Add(this.btnAuto);
            this.Controls.Add(this.btnStats);
            this.Controls.Add(this.picDoorDown);
            this.Controls.Add(this.picDoorMonster);
            this.Controls.Add(this.txtDebug);
            this.Controls.Add(this.picDoorGhost);
            this.Controls.Add(this.picStair1);
            this.Controls.Add(this.picDoorClosed);
            this.Controls.Add(this.picDoorUp);
            this.Controls.Add(this.picBerdLeft);
            this.Controls.Add(this.picBerdRight);
            this.Controls.Add(this.picStair8);
            this.Controls.Add(this.picStair7);
            this.Controls.Add(this.picStair6);
            this.Controls.Add(this.picStair5);
            this.Controls.Add(this.picStair4);
            this.Controls.Add(this.picStair3);
            this.Controls.Add(this.picStair2);
            this.Controls.Add(this.picStair);
            this.Controls.Add(this.btnStart);
            this.Controls.Add(this.btnClose);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.picDoorMonster)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorGhost)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorDown)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorClosed)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picDoorUp)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBerdLeft)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBerdRight)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair8)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair7)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair6)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair5)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picStair)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnClose;
        private System.Windows.Forms.Timer timer;
        private System.Windows.Forms.Button btnStart;
        private System.Windows.Forms.PictureBox picStair;
        private System.Windows.Forms.PictureBox picStair2;
        private System.Windows.Forms.PictureBox picStair3;
        private System.Windows.Forms.PictureBox picStair4;
        private System.Windows.Forms.PictureBox picStair5;
        private System.Windows.Forms.PictureBox picStair6;
        private System.Windows.Forms.PictureBox picStair7;
        private System.Windows.Forms.PictureBox picStair8;
        private System.Windows.Forms.PictureBox picStair1;
        private System.Windows.Forms.PictureBox picBerdRight;
        private System.Windows.Forms.PictureBox picBerdLeft;
        private System.Windows.Forms.PictureBox picDoorUp;
        private System.Windows.Forms.PictureBox picDoorClosed;
        private System.Windows.Forms.PictureBox picDoorDown;
        private System.Windows.Forms.PictureBox picDoorGhost;
        private System.Windows.Forms.TextBox txtDebug;
        private System.Windows.Forms.PictureBox picDoorMonster;
        private System.Windows.Forms.Button btnStats;
        private System.Windows.Forms.Button btnAuto;
    }
}

