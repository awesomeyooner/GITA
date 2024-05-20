namespace Final_Project
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
            this.Update = new System.Windows.Forms.Timer(this.components);
            this.label1 = new System.Windows.Forms.Label();
            this.stamina = new System.Windows.Forms.Label();
            this.staminaTimer = new System.Windows.Forms.Timer(this.components);
            this.projectile1 = new System.Windows.Forms.Label();
            this.projectile3 = new System.Windows.Forms.Label();
            this.projectile2 = new System.Windows.Forms.Label();
            this.projectile5 = new System.Windows.Forms.Label();
            this.projectile4 = new System.Windows.Forms.Label();
            this.picEnemy0 = new System.Windows.Forms.PictureBox();
            this.health = new System.Windows.Forms.Label();
            this.picEnemy1 = new System.Windows.Forms.PictureBox();
            this.picEnemy2 = new System.Windows.Forms.PictureBox();
            this.picEnemy3 = new System.Windows.Forms.PictureBox();
            this.picEnemy4 = new System.Windows.Forms.PictureBox();
            this.itemTimer = new System.Windows.Forms.Timer(this.components);
            this.RoundIndicator = new System.Windows.Forms.Label();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.fileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.quitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.aboutToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.pauseUnpauseToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.newGameToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.picWeapon = new System.Windows.Forms.PictureBox();
            this.picBoss = new System.Windows.Forms.PictureBox();
            this.bossHealthBar = new System.Windows.Forms.Label();
            this.bossBullet = new System.Windows.Forms.Label();
            this.stopTime = new System.Windows.Forms.Timer(this.components);
            this.timeIcon = new System.Windows.Forms.Label();
            this.arbi = new System.Windows.Forms.Label();
            this.btnReset = new System.Windows.Forms.Label();
            this.player = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy0)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy4)).BeginInit();
            this.menuStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picWeapon)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBoss)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.player)).BeginInit();
            this.SuspendLayout();
            // 
            // Update
            // 
            this.Update.Interval = 20;
            this.Update.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // label1
            // 
            this.label1.Font = new System.Drawing.Font("Comic Sans MS", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(39, 24);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(136, 57);
            this.label1.TabIndex = 2;
            this.label1.Text = "label1";
            // 
            // stamina
            // 
            this.stamina.BackColor = System.Drawing.Color.Cyan;
            this.stamina.Location = new System.Drawing.Point(28, 812);
            this.stamina.Name = "stamina";
            this.stamina.Size = new System.Drawing.Size(702, 20);
            this.stamina.TabIndex = 3;
            this.stamina.Click += new System.EventHandler(this.stamina_Click);
            // 
            // staminaTimer
            // 
            this.staminaTimer.Interval = 3000;
            this.staminaTimer.Tick += new System.EventHandler(this.staminaTimer_Tick);
            // 
            // projectile1
            // 
            this.projectile1.BackColor = System.Drawing.Color.Fuchsia;
            this.projectile1.Location = new System.Drawing.Point(605, 364);
            this.projectile1.Name = "projectile1";
            this.projectile1.Size = new System.Drawing.Size(10, 10);
            this.projectile1.TabIndex = 4;
            // 
            // projectile3
            // 
            this.projectile3.BackColor = System.Drawing.Color.Fuchsia;
            this.projectile3.Location = new System.Drawing.Point(757, 425);
            this.projectile3.Name = "projectile3";
            this.projectile3.Size = new System.Drawing.Size(10, 10);
            this.projectile3.TabIndex = 5;
            // 
            // projectile2
            // 
            this.projectile2.BackColor = System.Drawing.Color.Fuchsia;
            this.projectile2.Location = new System.Drawing.Point(668, 409);
            this.projectile2.Name = "projectile2";
            this.projectile2.Size = new System.Drawing.Size(10, 10);
            this.projectile2.TabIndex = 6;
            // 
            // projectile5
            // 
            this.projectile5.BackColor = System.Drawing.Color.Fuchsia;
            this.projectile5.Location = new System.Drawing.Point(805, 444);
            this.projectile5.Name = "projectile5";
            this.projectile5.Size = new System.Drawing.Size(10, 10);
            this.projectile5.TabIndex = 7;
            // 
            // projectile4
            // 
            this.projectile4.BackColor = System.Drawing.Color.Fuchsia;
            this.projectile4.Location = new System.Drawing.Point(834, 392);
            this.projectile4.Name = "projectile4";
            this.projectile4.Size = new System.Drawing.Size(10, 10);
            this.projectile4.TabIndex = 8;
            // 
            // picEnemy0
            // 
            this.picEnemy0.Image = global::Final_Project.Properties.Resources.smoile;
            this.picEnemy0.Location = new System.Drawing.Point(605, 456);
            this.picEnemy0.Name = "picEnemy0";
            this.picEnemy0.Size = new System.Drawing.Size(89, 79);
            this.picEnemy0.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picEnemy0.TabIndex = 9;
            this.picEnemy0.TabStop = false;
            // 
            // health
            // 
            this.health.BackColor = System.Drawing.Color.Red;
            this.health.Location = new System.Drawing.Point(28, 775);
            this.health.Name = "health";
            this.health.Size = new System.Drawing.Size(702, 20);
            this.health.TabIndex = 10;
            // 
            // picEnemy1
            // 
            this.picEnemy1.Image = global::Final_Project.Properties.Resources.smoile;
            this.picEnemy1.Location = new System.Drawing.Point(668, 77);
            this.picEnemy1.Name = "picEnemy1";
            this.picEnemy1.Size = new System.Drawing.Size(99, 88);
            this.picEnemy1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picEnemy1.TabIndex = 11;
            this.picEnemy1.TabStop = false;
            // 
            // picEnemy2
            // 
            this.picEnemy2.Image = global::Final_Project.Properties.Resources.smoile;
            this.picEnemy2.Location = new System.Drawing.Point(614, 171);
            this.picEnemy2.Name = "picEnemy2";
            this.picEnemy2.Size = new System.Drawing.Size(99, 88);
            this.picEnemy2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picEnemy2.TabIndex = 12;
            this.picEnemy2.TabStop = false;
            // 
            // picEnemy3
            // 
            this.picEnemy3.Image = global::Final_Project.Properties.Resources.smoile;
            this.picEnemy3.Location = new System.Drawing.Point(379, 92);
            this.picEnemy3.Name = "picEnemy3";
            this.picEnemy3.Size = new System.Drawing.Size(99, 88);
            this.picEnemy3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picEnemy3.TabIndex = 13;
            this.picEnemy3.TabStop = false;
            // 
            // picEnemy4
            // 
            this.picEnemy4.Image = global::Final_Project.Properties.Resources.smoile;
            this.picEnemy4.Location = new System.Drawing.Point(732, 245);
            this.picEnemy4.Name = "picEnemy4";
            this.picEnemy4.Size = new System.Drawing.Size(99, 88);
            this.picEnemy4.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picEnemy4.TabIndex = 14;
            this.picEnemy4.TabStop = false;
            // 
            // itemTimer
            // 
            this.itemTimer.Interval = 250;
            this.itemTimer.Tick += new System.EventHandler(this.itemTimer_Tick);
            // 
            // RoundIndicator
            // 
            this.RoundIndicator.BackColor = System.Drawing.Color.Lime;
            this.RoundIndicator.Location = new System.Drawing.Point(1119, 24);
            this.RoundIndicator.Name = "RoundIndicator";
            this.RoundIndicator.Size = new System.Drawing.Size(157, 57);
            this.RoundIndicator.TabIndex = 15;
            // 
            // menuStrip1
            // 
            this.menuStrip1.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileToolStripMenuItem,
            this.pauseUnpauseToolStripMenuItem,
            this.newGameToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(1524, 28);
            this.menuStrip1.TabIndex = 16;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // fileToolStripMenuItem
            // 
            this.fileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.quitToolStripMenuItem,
            this.aboutToolStripMenuItem});
            this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
            this.fileToolStripMenuItem.Size = new System.Drawing.Size(46, 24);
            this.fileToolStripMenuItem.Text = "File";
            this.fileToolStripMenuItem.Click += new System.EventHandler(this.fileToolStripMenuItem_Click);
            // 
            // quitToolStripMenuItem
            // 
            this.quitToolStripMenuItem.Name = "quitToolStripMenuItem";
            this.quitToolStripMenuItem.Size = new System.Drawing.Size(133, 26);
            this.quitToolStripMenuItem.Text = "Quit";
            this.quitToolStripMenuItem.Click += new System.EventHandler(this.quitToolStripMenuItem_Click);
            // 
            // aboutToolStripMenuItem
            // 
            this.aboutToolStripMenuItem.Name = "aboutToolStripMenuItem";
            this.aboutToolStripMenuItem.Size = new System.Drawing.Size(133, 26);
            this.aboutToolStripMenuItem.Text = "About";
            this.aboutToolStripMenuItem.Click += new System.EventHandler(this.aboutToolStripMenuItem_Click);
            // 
            // pauseUnpauseToolStripMenuItem
            // 
            this.pauseUnpauseToolStripMenuItem.Name = "pauseUnpauseToolStripMenuItem";
            this.pauseUnpauseToolStripMenuItem.Size = new System.Drawing.Size(131, 24);
            this.pauseUnpauseToolStripMenuItem.Text = "Pause / Unpause";
            this.pauseUnpauseToolStripMenuItem.TextDirection = System.Windows.Forms.ToolStripTextDirection.Horizontal;
            this.pauseUnpauseToolStripMenuItem.Click += new System.EventHandler(this.pauseUnpauseToolStripMenuItem_Click);
            // 
            // newGameToolStripMenuItem
            // 
            this.newGameToolStripMenuItem.Name = "newGameToolStripMenuItem";
            this.newGameToolStripMenuItem.Size = new System.Drawing.Size(96, 24);
            this.newGameToolStripMenuItem.Text = "New Game";
            this.newGameToolStripMenuItem.Click += new System.EventHandler(this.newGameToolStripMenuItem_Click);
            // 
            // picWeapon
            // 
            this.picWeapon.Image = global::Final_Project.Properties.Resources.sword1;
            this.picWeapon.Location = new System.Drawing.Point(487, 680);
            this.picWeapon.Name = "picWeapon";
            this.picWeapon.Size = new System.Drawing.Size(191, 187);
            this.picWeapon.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picWeapon.TabIndex = 17;
            this.picWeapon.TabStop = false;
            // 
            // picBoss
            // 
            this.picBoss.Image = global::Final_Project.Properties.Resources.anonymous_alliance;
            this.picBoss.Location = new System.Drawing.Point(1005, 340);
            this.picBoss.Name = "picBoss";
            this.picBoss.Size = new System.Drawing.Size(150, 140);
            this.picBoss.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.picBoss.TabIndex = 18;
            this.picBoss.TabStop = false;
            // 
            // bossHealthBar
            // 
            this.bossHealthBar.BackColor = System.Drawing.Color.Red;
            this.bossHealthBar.Location = new System.Drawing.Point(336, 77);
            this.bossHealthBar.Name = "bossHealthBar";
            this.bossHealthBar.Size = new System.Drawing.Size(702, 20);
            this.bossHealthBar.TabIndex = 19;
            this.bossHealthBar.Click += new System.EventHandler(this.bossHealthBar_Click);
            // 
            // bossBullet
            // 
            this.bossBullet.BackColor = System.Drawing.Color.Yellow;
            this.bossBullet.Location = new System.Drawing.Point(958, 626);
            this.bossBullet.Name = "bossBullet";
            this.bossBullet.Size = new System.Drawing.Size(39, 39);
            this.bossBullet.TabIndex = 20;
            // 
            // stopTime
            // 
            this.stopTime.Tick += new System.EventHandler(this.stopTime_Tick);
            // 
            // timeIcon
            // 
            this.timeIcon.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(0)))));
            this.timeIcon.Location = new System.Drawing.Point(715, 702);
            this.timeIcon.Name = "timeIcon";
            this.timeIcon.Size = new System.Drawing.Size(150, 150);
            this.timeIcon.TabIndex = 21;
            // 
            // arbi
            // 
            this.arbi.Font = new System.Drawing.Font("Unispace", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.arbi.Location = new System.Drawing.Point(409, 6);
            this.arbi.Name = "arbi";
            this.arbi.Size = new System.Drawing.Size(588, 63);
            this.arbi.TabIndex = 22;
            this.arbi.Text = "Omniscient Seer";
            this.arbi.Visible = false;
            // 
            // btnReset
            // 
            this.btnReset.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(255)))));
            this.btnReset.Font = new System.Drawing.Font("Showcard Gothic", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.btnReset.Location = new System.Drawing.Point(86, 330);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(241, 133);
            this.btnReset.TabIndex = 24;
            this.btnReset.Text = "Reset";
            this.btnReset.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.btnReset.Visible = false;
            this.btnReset.Click += new System.EventHandler(this.btnReset_Click_1);
            // 
            // player
            // 
            this.player.Image = global::Final_Project.Properties.Resources.knight;
            this.player.Location = new System.Drawing.Point(367, 375);
            this.player.Name = "player";
            this.player.Size = new System.Drawing.Size(111, 105);
            this.player.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.player.TabIndex = 25;
            this.player.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1524, 861);
            this.Controls.Add(this.player);
            this.Controls.Add(this.btnReset);
            this.Controls.Add(this.arbi);
            this.Controls.Add(this.timeIcon);
            this.Controls.Add(this.bossBullet);
            this.Controls.Add(this.bossHealthBar);
            this.Controls.Add(this.picBoss);
            this.Controls.Add(this.picWeapon);
            this.Controls.Add(this.RoundIndicator);
            this.Controls.Add(this.picEnemy4);
            this.Controls.Add(this.picEnemy3);
            this.Controls.Add(this.picEnemy2);
            this.Controls.Add(this.picEnemy1);
            this.Controls.Add(this.health);
            this.Controls.Add(this.picEnemy0);
            this.Controls.Add(this.projectile4);
            this.Controls.Add(this.projectile5);
            this.Controls.Add(this.projectile2);
            this.Controls.Add(this.projectile3);
            this.Controls.Add(this.projectile1);
            this.Controls.Add(this.stamina);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyDown);
            this.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.Form1_KeyPress);
            this.KeyUp += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyUp);
            this.MouseClick += new System.Windows.Forms.MouseEventHandler(this.Form1_MouseClick);
            this.MouseDoubleClick += new System.Windows.Forms.MouseEventHandler(this.Form1_MouseDoubleClick);
            this.PreviewKeyDown += new System.Windows.Forms.PreviewKeyDownEventHandler(this.Form1_PreviewKeyDown);
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy0)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picEnemy4)).EndInit();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picWeapon)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picBoss)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.player)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Timer Update;
        private Label label1;
        private Label stamina;
        private System.Windows.Forms.Timer staminaTimer;
        private Label projectile1;
        private Label projectile3;
        private Label projectile2;
        private Label projectile5;
        private Label projectile4;
        private PictureBox picEnemy0;
        private Label health;
        private PictureBox picEnemy1;
        private PictureBox picEnemy2;
        private PictureBox picEnemy3;
        private PictureBox picEnemy4;
        private System.Windows.Forms.Timer itemTimer;
        private Label RoundIndicator;
        private MenuStrip menuStrip1;
        private ToolStripMenuItem fileToolStripMenuItem;
        private ToolStripMenuItem quitToolStripMenuItem;
        private ToolStripMenuItem pauseUnpauseToolStripMenuItem;
        private PictureBox picWeapon;
        private PictureBox picBoss;
        private Label bossHealthBar;
        private Label bossBullet;
        private ToolStripMenuItem aboutToolStripMenuItem;
        private System.Windows.Forms.Timer stopTime;
        private Label timeIcon;
        private Label arbi;
        private Label btnReset;
        private ToolStripMenuItem newGameToolStripMenuItem;
        private PictureBox player;
    }
}