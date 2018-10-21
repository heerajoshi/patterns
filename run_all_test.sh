set -e

./run_test.sh ./src/rectanglePattern.js ./test/create_rectangle_input ./test/create_rectangle_output

./run_test.sh ./src/trianglePattern.js ./test/create_triangle_input ./test/create_triangle_output

./run_test.sh ./src/diamondPattern.js ./test/create_diamond_input ./test/create_diamond_output
