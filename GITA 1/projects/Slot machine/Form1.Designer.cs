namespace Slot_machine
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
            this.btnQuit = new System.Windows.Forms.Button();
            this.btnSpin = new System.Windows.Forms.Button();
            this.lblMoney = new System.Windows.Forms.Label();
            this.txtMoneyCache = new System.Windows.Forms.TextBox();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.betBox = new System.Windows.Forms.GroupBox();
            this.radBet2 = new System.Windows.Forms.RadioButton();
            this.radBet3 = new System.Windows.Forms.RadioButton();
            this.radBet4 = new System.Windows.Forms.RadioButton();
            this.radBet5 = new System.Windows.Forms.RadioButton();
            this.radBet1 = new System.Windows.Forms.RadioButton();
            this.lblDebug = new System.Windows.Forms.Label();
            this.imgKrabs = new System.Windows.Forms.PictureBox();
            this.imgPlonktan = new System.Windows.Forms.PictureBox();
            this.imgSpangBob = new System.Windows.Forms.PictureBox();
            this.imgSkidward = new System.Windows.Forms.PictureBox();
            this.imgPatrick = new System.Windows.Forms.PictureBox();
            this.picReel1 = new System.Windows.Forms.PictureBox();
            this.picReel2 = new System.Windows.Forms.PictureBox();
            this.picReel3 = new System.Windows.Forms.PictureBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.lblJackPot = new System.Windows.Forms.Label();
            this.betBox.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.imgKrabs)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgPlonktan)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgSpangBob)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgSkidward)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgPatrick)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picReel1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picReel2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picReel3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // btnQuit
            // 
            this.btnQuit.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnQuit.Location = new System.Drawing.Point(656, 12);
            this.btnQuit.Name = "btnQuit";
            this.btnQuit.Size = new System.Drawing.Size(132, 57);
            this.btnQuit.TabIndex = 0;
            this.btnQuit.Text = "QUIT";
            this.btnQuit.UseVisualStyleBackColor = true;
            this.btnQuit.Click += new System.EventHandler(this.btnQuit_Click);
            // 
            // btnSpin
            // 
            this.btnSpin.Enabled = false;
            this.btnSpin.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnSpin.Location = new System.Drawing.Point(389, 41);
            this.btnSpin.Name = "btnSpin";
            this.btnSpin.Size = new System.Drawing.Size(132, 57);
            this.btnSpin.TabIndex = 1;
            this.btnSpin.Text = "SPIN";
            this.btnSpin.UseVisualStyleBackColor = true;
            this.btnSpin.Click += new System.EventHandler(this.btnSpin_Click);
            // 
            // lblMoney
            // 
            this.lblMoney.AutoSize = true;
            this.lblMoney.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblMoney.Location = new System.Drawing.Point(1, 31);
            this.lblMoney.Name = "lblMoney";
            this.lblMoney.Size = new System.Drawing.Size(141, 38);
            this.lblMoney.TabIndex = 2;
            this.lblMoney.Text = "BALANCE:";
            // 
            // txtMoneyCache
            // 
            this.txtMoneyCache.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.txtMoneyCache.Location = new System.Drawing.Point(148, 31);
            this.txtMoneyCache.Name = "txtMoneyCache";
            this.txtMoneyCache.Size = new System.Drawing.Size(142, 43);
            this.txtMoneyCache.TabIndex = 3;
            this.txtMoneyCache.Text = "0";
            this.txtMoneyCache.TextChanged += new System.EventHandler(this.txtMoneyCache_TextChanged);
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // betBox
            // 
            this.betBox.Controls.Add(this.radBet2);
            this.betBox.Controls.Add(this.radBet3);
            this.betBox.Controls.Add(this.radBet4);
            this.betBox.Controls.Add(this.radBet5);
            this.betBox.Controls.Add(this.radBet1);
            this.betBox.Location = new System.Drawing.Point(12, 99);
            this.betBox.Name = "betBox";
            this.betBox.Size = new System.Drawing.Size(134, 208);
            this.betBox.TabIndex = 4;
            this.betBox.TabStop = false;
            this.betBox.Text = "Place Your Bet:";
            // 
            // radBet2
            // 
            this.radBet2.AutoSize = true;
            this.radBet2.Location = new System.Drawing.Point(6, 56);
            this.radBet2.Name = "radBet2";
            this.radBet2.Size = new System.Drawing.Size(46, 24);
            this.radBet2.TabIndex = 4;
            this.radBet2.Text = "$2";
            this.radBet2.UseVisualStyleBackColor = true;
            // 
            // radBet3
            // 
            this.radBet3.AutoSize = true;
            this.radBet3.Location = new System.Drawing.Point(6, 93);
            this.radBet3.Name = "radBet3";
            this.radBet3.Size = new System.Drawing.Size(46, 24);
            this.radBet3.TabIndex = 3;
            this.radBet3.Text = "$3";
            this.radBet3.UseVisualStyleBackColor = true;
            // 
            // radBet4
            // 
            this.radBet4.AutoSize = true;
            this.radBet4.Location = new System.Drawing.Point(6, 132);
            this.radBet4.Name = "radBet4";
            this.radBet4.Size = new System.Drawing.Size(46, 24);
            this.radBet4.TabIndex = 2;
            this.radBet4.Text = "$4";
            this.radBet4.UseVisualStyleBackColor = true;
            // 
            // radBet5
            // 
            this.radBet5.AutoSize = true;
            this.radBet5.Location = new System.Drawing.Point(6, 162);
            this.radBet5.Name = "radBet5";
            this.radBet5.Size = new System.Drawing.Size(46, 24);
            this.radBet5.TabIndex = 1;
            this.radBet5.Text = "$5";
            this.radBet5.UseVisualStyleBackColor = true;
            // 
            // radBet1
            // 
            this.radBet1.AutoSize = true;
            this.radBet1.Checked = true;
            this.radBet1.Location = new System.Drawing.Point(6, 26);
            this.radBet1.Name = "radBet1";
            this.radBet1.Size = new System.Drawing.Size(46, 24);
            this.radBet1.TabIndex = 0;
            this.radBet1.TabStop = true;
            this.radBet1.Text = "$1";
            this.radBet1.UseVisualStyleBackColor = true;
            // 
            // lblDebug
            // 
            this.lblDebug.AutoSize = true;
            this.lblDebug.Font = new System.Drawing.Font("Segoe UI", 16.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblDebug.Location = new System.Drawing.Point(49, 400);
            this.lblDebug.Name = "lblDebug";
            this.lblDebug.Size = new System.Drawing.Size(58, 38);
            this.lblDebug.TabIndex = 5;
            this.lblDebug.Text = "yes";
            this.lblDebug.Click += new System.EventHandler(this.lblDebug_Click);
            // 
            // imgKrabs
            // 
            this.imgKrabs.Image = global::Slot_machine.Properties.Resources.krabs;
            this.imgKrabs.Location = new System.Drawing.Point(933, 219);
            this.imgKrabs.Name = "imgKrabs";
            this.imgKrabs.Size = new System.Drawing.Size(162, 168);
            this.imgKrabs.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.imgKrabs.TabIndex = 6;
            this.imgKrabs.TabStop = false;
            this.imgKrabs.Visible = false;
            // 
            // imgPlonktan
            // 
            this.imgPlonktan.Image = global::Slot_machine.Properties.Resources.poopy_head;
            this.imgPlonktan.Location = new System.Drawing.Point(922, 195);
            this.imgPlonktan.Name = "imgPlonktan";
            this.imgPlonktan.Size = new System.Drawing.Size(162, 168);
            this.imgPlonktan.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.imgPlonktan.TabIndex = 7;
            this.imgPlonktan.TabStop = false;
            this.imgPlonktan.Visible = false;
            // 
            // imgSpangBob
            // 
            this.imgSpangBob.Image = global::Slot_machine.Properties.Resources.spangbob;
            this.imgSpangBob.Location = new System.Drawing.Point(907, 48);
            this.imgSpangBob.Name = "imgSpangBob";
            this.imgSpangBob.Size = new System.Drawing.Size(162, 168);
            this.imgSpangBob.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.imgSpangBob.TabIndex = 8;
            this.imgSpangBob.TabStop = false;
            this.imgSpangBob.Visible = false;
            // 
            // imgSkidward
            // 
            this.imgSkidward.Image = global::Slot_machine.Properties.Resources.skidward;
            this.imgSkidward.Location = new System.Drawing.Point(907, 164);
            this.imgSkidward.Name = "imgSkidward";
            this.imgSkidward.Size = new System.Drawing.Size(162, 168);
            this.imgSkidward.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.imgSkidward.TabIndex = 9;
            this.imgSkidward.TabStop = false;
            this.imgSkidward.Visible = false;
            // 
            // imgPatrick
            // 
            this.imgPatrick.Image = global::Slot_machine.Properties.Resources.patrick;
            this.imgPatrick.Location = new System.Drawing.Point(907, 104);
            this.imgPatrick.Name = "imgPatrick";
            this.imgPatrick.Size = new System.Drawing.Size(162, 168);
            this.imgPatrick.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.imgPatrick.TabIndex = 10;
            this.imgPatrick.TabStop = false;
            this.imgPatrick.Visible = false;
            // 
            // picReel1
            // 
            this.picReel1.Location = new System.Drawing.Point(280, 345);
            this.picReel1.Name = "picReel1";
            this.picReel1.Size = new System.Drawing.Size(123, 134);
            this.picReel1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picReel1.TabIndex = 11;
            this.picReel1.TabStop = false;
            this.picReel1.Click += new System.EventHandler(this.picReel1_Click);
            // 
            // picReel2
            // 
            this.picReel2.Location = new System.Drawing.Point(398, 345);
            this.picReel2.Name = "picReel2";
            this.picReel2.Size = new System.Drawing.Size(123, 134);
            this.picReel2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picReel2.TabIndex = 12;
            this.picReel2.TabStop = false;
            // 
            // picReel3
            // 
            this.picReel3.Location = new System.Drawing.Point(517, 345);
            this.picReel3.Name = "picReel3";
            this.picReel3.Size = new System.Drawing.Size(123, 134);
            this.picReel3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picReel3.TabIndex = 13;
            this.picReel3.TabStop = false;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = global::Slot_machine.Properties.Resources.betterSlot;
            this.pictureBox1.Location = new System.Drawing.Point(196, 104);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(564, 469);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 14;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // lblJackPot
            // 
            this.lblJackPot.AutoSize = true;
            this.lblJackPot.Font = new System.Drawing.Font("Unispace", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lblJackPot.Location = new System.Drawing.Point(372, 531);
            this.lblJackPot.Name = "lblJackPot";
            this.lblJackPot.Size = new System.Drawing.Size(178, 72);
            this.lblJackPot.TabIndex = 15;
            this.lblJackPot.Text = "1000";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1081, 945);
            this.Controls.Add(this.lblJackPot);
            this.Controls.Add(this.picReel3);
            this.Controls.Add(this.picReel2);
            this.Controls.Add(this.picReel1);
            this.Controls.Add(this.imgPatrick);
            this.Controls.Add(this.imgSkidward);
            this.Controls.Add(this.imgSpangBob);
            this.Controls.Add(this.imgPlonktan);
            this.Controls.Add(this.imgKrabs);
            this.Controls.Add(this.lblDebug);
            this.Controls.Add(this.betBox);
            this.Controls.Add(this.txtMoneyCache);
            this.Controls.Add(this.lblMoney);
            this.Controls.Add(this.btnSpin);
            this.Controls.Add(this.btnQuit);
            this.Controls.Add(this.pictureBox1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.betBox.ResumeLayout(false);
            this.betBox.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.imgKrabs)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgPlonktan)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgSpangBob)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgSkidward)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgPatrick)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picReel1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picReel2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picReel3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button btnQuit;
        private Button btnSpin;
        private Label lblMoney;
        private TextBox txtMoneyCache;
        private System.Windows.Forms.Timer timer1;
        private GroupBox betBox;
        private RadioButton radBet2;
        private RadioButton radBet3;
        private RadioButton radBet4;
        private RadioButton radBet5;
        private RadioButton radBet1;
        private Label lblDebug;
        private PictureBox imgKrabs;
        private PictureBox imgPlonktan;
        private PictureBox imgSpangBob;
        private PictureBox imgSkidward;
        private PictureBox imgPatrick;
        private PictureBox picReel1;
        private PictureBox picReel2;
        private PictureBox picReel3;
        private PictureBox pictureBox1;
        private Label lblJackPot;
    }
}