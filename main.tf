provider "aws" {
  region     = "eu-north-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

resource "aws_instance" "iit_instance" {
  ami             = "ami-0182edb7bbd9e9cbe"
  instance_type   = "t3.micro"
  key_name      =  "lab5key"
  security_groups = [aws_security_group.instance_sg.name]
  tags = {
    Name = "IIT Instance"
  }
}

resource "aws_security_group" "instance_sg" {
  name_prefix = "instance-sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["178.151.218.20/32"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
