# Publishing a Website on AWS

## Create an Ubuntu EC2 Instance

1. Launch an EC2 instance with Ubuntu.
<img width="658" alt="Screenshot 2025-02-24 224154" src="https://github.com/user-attachments/assets/0b08ca1f-8c7d-4534-876e-8260baa1e1db" />


 <img width="924" alt="Screenshot 2025-02-24 224254" src="https://github.com/user-attachments/assets/39cc2f1e-6297-4cc5-bd5c-cee93a1aef2c" />


<img width="929" alt="Screenshot 2025-02-24 224307" src="https://github.com/user-attachments/assets/062f2aed-03ae-4431-8103-d4bfbf047180" />


2. Connect to the instance.

<img width="649" alt="Screenshot 2025-02-24 224341" src="https://github.com/user-attachments/assets/9ef180ad-845d-437f-a088-e4517da4ad0a" />

  

## Install Apache
1. Update the package lists:
   ```bash
   sudo apt update -y
   ```
2. Install Apache:
   ```bash
   sudo apt install apache2 -y
   ```
3. Start and enable Apache:
   ```bash
   sudo systemctl start apache2
   sudo systemctl enable apache2
   ```
4. Verify Apache installation by accessing the public IP address in a web browser. The default Apache server page should be visible.

   <img width="948" alt="Screenshot 2025-02-24 224709" src="https://github.com/user-attachments/assets/fb8b507a-606c-4e47-8ac6-ff42004c8f8f" />

   

## Clone the Repository
1. Install Git:
   ```bash
   sudo apt install git -y
   ```
2. Navigate to the default HTTP directory:
   ```bash
   cd /var/www/html
   ```
3. Clone the repository:
   ```bash
   sudo git clone https://github.com/your-username/your-repo.git
   ```
4. Move the contents of the repository to the HTML directory:
   ```bash
   sudo mv your-repo/* .
   sudo rm -rf your-repo
   ```

## Set Permissions
1. Set the appropriate permissions:
   ```bash
   sudo chmod -R 755 /var/www/html
   sudo chown -R www-data:www-data /var/www/html
   ```
 <img width="950" alt="Screenshot 2025-02-24 224937" src="https://github.com/user-attachments/assets/a692ae92-b5fb-4f9c-a1f0-a12cb9dd7682" />


## Restart Apache
1. Restart the Apache server:
   ```bash
   sudo systemctl restart apache2
   ```

## Access the Website
1. Open a web browser and navigate to:
   ```
   http://your-ec2-public-ip
   ```
  <img width="953" alt="Screenshot 2025-02-24 230103" src="https://github.com/user-attachments/assets/90e58700-ad18-4651-abc9-eec075914c11" />


## Terminate the Instance
>> After completing the work, terminate the EC2 instance.
  
