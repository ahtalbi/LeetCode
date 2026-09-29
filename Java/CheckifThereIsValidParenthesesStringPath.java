class CheckifThereIsValidParenthesesStringPath {
    private String res;

    public CheckifThereIsValidParenthesesStringPath() {
        res = "";
    }

    private boolean checkTheParanetheses() {
        int counter = 0;
        for (char c : res.toCharArray()) {
            if (c != '(' && c != ')') return false;
            if (c == '(') counter++;
            else counter--;
        }
        System.out.println(counter);
        return counter == 0;
    }

    // this does use the backtraking
    private boolean hasValidPathRecursion(int i, int j, char[][] grid) {
        // the quite condition
        res += grid[i][j];
        if (j == grid[i].length - 1 && i == grid.length - 1) {
            // check if the string is good
            System.out.println(res);
            if (checkTheParanetheses()) return true;
        }
        if (j + 1 < grid[i].length) {
            // check right
            if (hasValidPathRecursion(i, j + 1, grid)) return true;
        }
        if (i + 1 < grid.length) {
            // check bottom
            if (hasValidPathRecursion(i + 1, j, grid)) return true;
        }
        res = res.substring(0, res.length() - 1);
        return false;
    }
    
    public boolean hasValidPath(char[][] grid) {
        if (grid.length == 0) return false;
        if (grid[0].length == 0) return false;
        return hasValidPathRecursion(0, 0, grid);
    }

    public static void main(String[] args) {
        CheckifThereIsValidParenthesesStringPath instance = new CheckifThereIsValidParenthesesStringPath();
        char[][] matrix = {
            {'(','(','('},
            {')','(',')'},
            {'(','(','('},
            {'(','(','('}
        };
        System.out.println(instance.hasValidPath(matrix));
    }
}