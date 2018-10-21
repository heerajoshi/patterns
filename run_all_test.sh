set -e

./run_test.sh rectanglePattern.js ./test/create_rectangle_input ./test/create_rectangle_output

./run_test.sh trianglePattern.js ./test/create_triangle_input ./test/create_triangle_output

./run_test.sh diamondPattern.js ./test/create_diamond_input ./test/create_diamond_output
