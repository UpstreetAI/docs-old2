#!/bin/bash

# Folder containing PNG files
folder_path="./"

# Loop through each PNG file
for png_file in "$folder_path"/*.png; do
  # Generate JPG filename
  jpg_file="${png_file%.png}.jpg"

  # Convert PNG to JPG
  sips -s format jpeg "$png_file" --out "$jpg_file"
done
