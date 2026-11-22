class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        print(len(grid))
        perimeter = 0
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == 1:
                    if row-1 < 0 or grid[row-1][col] == 0:
                        perimeter += 1
                    if col-1 < 0 or grid[row][col-1] == 0:
                        perimeter += 1
                    if row + 1 >= len(grid) or grid[row + 1][col] == 0:
                        perimeter += 1
                    if col + 1 >= len(grid[0]) or grid[row][col + 1] == 0:
                        perimeter += 1
        return perimeter



