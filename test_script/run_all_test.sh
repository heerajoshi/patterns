set -e

test_script/run_test.sh ./create_rectangle.js ./app_test_data/input_data/create_rectangle_input ./app_test_data/expected_output_data/create_rectangle_output

test_script/run_test.sh ./create_triangle.js ./app_test_data/input_data/create_triangle_input ./app_test_data/expected_output_data/create_triangle_output

test_script/run_test.sh ./create_diamond.js ../app_test_data/input_data/create_diamond_input ./app_test_data/expected_output_data/create_diamond_output
