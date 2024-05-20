using Final_Project;
using Final_Project.Properties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Security.Policy;
using System.Text;
using System.Timers;
using static Final_Project.Form1;

namespace BasicAI
{
    //class used to combine everything needed to make an enemy to keep most things self contained
    public class Gunner
    {
        //declare variables
        public PictureBox picEnemy;
        PictureBox player;
        Label projectile;
        Label[] projectiles;
        Label healthBar;
        Label playerHealth;
        public int healthcap;
        public double speed;

        double bulletX = 1;
        double bulletY = 1;

        Boolean bulletFired = false;
        public Point waypoint;

        public int width = 0;
        public int height = 0;

        public WeaponSelected currentWeapon;

        Form1 form = Form1.getInstance();

        System.Random r = new System.Random((int)System.DateTime.Now.Ticks);

        public Gunner(PictureBox picEnemy, PictureBox player, Label projectile, Label[] projectiles, Label healthBar, double speed, int healthcap, Label playerHealth)
        {
            //assign each variable to the parameters
            this.picEnemy = picEnemy;
            this.player = player;
            this.projectile = projectile;
            this.projectiles = projectiles;
            this.healthBar = healthBar;
            this.playerHealth = playerHealth;
            currentWeapon = WeaponSelected.SWORD;
            waypoint = new Point(500,500);

            this.healthcap = healthcap;
            this.speed = speed;

            healthBar.Width = healthcap;

            picEnemy.Visible = false;
            healthBar.Visible = false;
            projectile.Visible = false;
        }

        public void Update()
        {
            //auto updates depending on the health
            if (healthBar.Width > 0)
            {
                pursuit();


            }

            else
            {
                //MessageBox.Show("Congrats! The tyrant has been killed!");

            }
        }

        private void pursuit()
        {
            //tries to go to the player's position
            double posX = picEnemy.Left + (speed * getDeltaX(true));
            double posY = picEnemy.Top + (speed * getDeltaY(true));

            
            if (enemyTouch() || swordTouch())
            {
                //posX -= (1 * getDeltaX(false));
                //posY -= (1 * getDeltaY(false));

                picEnemy.Left = (int)posX;
                picEnemy.Top = (int)posY;
            }

            if (!bulletFired)
            {

                bulletX = getDeltaX(false);
                bulletY = getDeltaY(false);

                bulletFired = true;
                projectile.Left = (int)posX + picEnemy.Width / 2;
                projectile.Top = (int)posY + picEnemy.Height / 2;
            }
            else
                fireProj();


    
                picEnemy.Left = (int)posX;
                picEnemy.Top = (int)posY;

        }

        private void fireProj()
        {

            //shoots the projectile
            //change the rounding to a serate variable

            //double deltaX = getDeltaX(false);
            //double deltaY = getDeltaY(false);

            double x = projectile.Left + (0.02 * bulletX);
            double y = projectile.Top + (0.02 * bulletY);

            projectile.Left = (int)x;
            projectile.Top = (int)y;

            if(bulletOOB() || bulletHit() || shieldBlock())
            {
                if(bulletHit())
                {
                    playerHealth.Width -= 40;
                }
                resetBullet();
            }
        }


        public void move(int x, int y)
        {
            //move the enemy to the given point
            picEnemy.Left = x;
            picEnemy.Top = y;
        }

        public void respawn(int x, int y)
        {
            //reset the enemy
            picEnemy.Visible = true;
            healthBar.Visible = true;
            projectile.Visible = true;

            healthBar.Width = healthcap;
            move(x, y);
        }

        public void reset()
        {
            //turns off the enemy
            picEnemy.Visible = false;
            healthBar.Visible = false;
            projectile.Visible = false;

            healthBar.Width = healthcap;

            move(0, 0);
        }

        public void dynamicWaypoint(int width, int height)
        {
            //changes where the point is based off of where the player is to avoid it
            if (player.Left >= width / 2)
                waypoint.X = 0 + (picEnemy.Width * 2);
            else if (player.Left < width / 2)
                waypoint.X = width - (picEnemy.Width * 2);

            if (player.Top >= height / 2)
                waypoint.Y = 0 + (picEnemy.Height * 2);
            else if (player.Top < height / 2)
                waypoint.Y = height - (picEnemy.Height * 2);
        }

        public Boolean enemyTouch()
        {
            //returns if the enemy and the player are touching
            return picEnemy.Bounds.IntersectsWith(player.Bounds);
        }

        private Boolean shieldBlock()
        {
            //returns if the shield is touching the projectile
            for(int i = 0; i < projectiles.Length; i++)
            {
                if(currentWeapon == WeaponSelected.SHIELD && projectiles[i].Bounds.IntersectsWith(projectile.Bounds))
                {
                    return true;
                }
            }
            return false;
            

        }
        public Boolean swordTouch()
        {
            //returns if the sword is touching the enemy

            for (int i = 0; i < projectiles.Length; i++)
            {
                if (picEnemy.Bounds.IntersectsWith(projectiles[i].Bounds))
                {
                    //form.spawnHeart();
                    healthBar.Width -= 5;
                    return true;
                }
            }

            return false;
        }

        public int getHealth()
        {
            //returns the healthbar's width aka health
            return healthBar.Width;
        }

        public Boolean bulletHit()
        {
            //returns if the bullet hits the player
            return player.Bounds.IntersectsWith(projectile.Bounds);
        }

        private Boolean bulletCollide()
        {
            //returns if the bullet hits anything in general
            return player.Bounds.IntersectsWith(projectile.Bounds) || (projectile.Left > width || projectile.Right < 0 || projectile.Top > height || projectile.Bottom < 0);
        }

        private Boolean bulletOOB()
        {
            //returns if the bullet is out of bounds aka out of the form
            return (projectile.Left > width || projectile.Right < 0 || projectile.Top > height || projectile.Bottom < 0);
        }

        private void resetBullet()
        {
            //puts bullet back to the enemy
            bulletFired = false;

            projectile.Left = picEnemy.Left + picEnemy.Width / 2;
            projectile.Top = picEnemy.Top + picEnemy.Height / 2;

        }
        private double getDeltaY(Boolean usingWaypoint)
        {
            //gets the difference in y coordinates of either the waypoint or the player
            int playerX, playerY;
            if (usingWaypoint)
            {
                playerX = waypoint.X;// - (player.Width / 2);
                playerY = waypoint.Y;// + (player.Height / 2);
            }

            else
            {
                playerX = player.Left;
                playerY = player.Top;   
            }
                
            int enemyX = picEnemy.Left;// - (picEnemy.Width / 2);
            int enemyY = picEnemy.Top;// + (picEnemy.Height / 2);

            double deltaX = playerX - enemyX;
            double deltaY = playerY - enemyY;

            return deltaY;

        }

        private double getDeltaX(Boolean usingWaypoint)
        {
            //returns either the x difference of the waypoint or the player
            int playerX, playerY;
            if (usingWaypoint)
            {
                playerX = waypoint.X;// - (player.Width / 2);
                playerY = waypoint.Y;// + (player.Height / 2);
            }

            else
            {
                playerX = player.Left;
                playerY = player.Top;
            }

            int enemyX = picEnemy.Left;// - (picEnemy.Width / 2);
            int enemyY = picEnemy.Top;// + (picEnemy.Height / 2);

            double deltaX = playerX - enemyX;
            double deltaY = playerY - enemyY;

            return deltaX;

        }
    }
}
