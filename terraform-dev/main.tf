terraform {
  required_version = ">= 1.1.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.23.0"
    }
  }

  cloud {
    organization = "bryce_llc"

    workspaces {
      tags = {
        app = "pf"
      }
    }
  }
}

provider "azurerm" {
  features {}

  subscription_id = var.ARM_SUBSCRIPTION_ID
}

resource "azurerm_static_web_app" "dt_swa" {
  name                = "dev-test"
  resource_group_name = var.RESOURCE_GROUP_NAME
  location            = var.LOCATION

  repository_branch   = "feat/test-swa"
  repository_token    = var.REPOSITORY_TOKEN
  repository_url      = "https://github.com/bannguyen-agilityio/node-docker"
}
