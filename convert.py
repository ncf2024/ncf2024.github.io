# from psd_tools import PSDImage
# from PIL import Image
# import os

# def convert_psd_to_png(input_folder, output_folder):
#     # Create the output folder if it doesn't exist
#     if not os.path.exists(output_folder):
#         os.makedirs(output_folder)

#     # Iterate through all files in the input folder
#     for file_name in os.listdir(input_folder):
#         if file_name.endswith(".psd"):
#             # Open the PSD file
#             psd_path = os.path.join(input_folder, file_name)

#             try:
#                 psd = PSDImage.open(psd_path)

#                 # Combine all layers into one
#                 combined_image = Image.new("RGBA", psd.size)
#                 for layer in psd:
#                     combined_image.paste(layer.compose(), (0, 0), mask=layer.mask)

#                     # Save the combined image as PNG
#                     png_path = os.path.join(output_folder, f"{os.path.splitext(file_name)[0]}.png")
#                     combined_image.save(png_path)
#                     print(f"Converted {file_name} layer {i} to {png_path}")

#             except Exception as e:
#                 print(f"Error converting {file_name}: {e}")



# # Example usage
# input_folder = "./stall_new"
# output_folder = "./stall_out"
# convert_psd_to_png(input_folder, output_folder)


from PIL import Image
import os



def convert_image_to_webp(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Iterate through all files in the input folder
    for file_name in os.listdir(input_folder):
        input_path = os.path.join(input_folder, file_name)
        output_path = os.path.join(output_folder, os.path.splitext(file_name)[0] + ".webp")

        try:
            # Open image and convert to webp
            with Image.open(input_path) as img:
                img.save(output_path, "webp")
                print(f"Converted {file_name} to {output_path}")
        except Exception as e:
            print(f"Error converting {file_name}: {e}")


# Example usage
input_folder = "./newnumber"
output_folder = "./number_out"
convert_image_to_webp(input_folder, output_folder)