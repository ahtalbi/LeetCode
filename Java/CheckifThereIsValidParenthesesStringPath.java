import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

class CheckifThereIsValidParenthesesStringPath {
    private List<Integer[]> moveQueue;
    private List<Integer> firstRoadQueue;
    private List<Integer> secendRoadQueue;

    public CheckifThereIsValidParenthesesStringPath() {
        moveQueue = new ArrayList();
        firstRoadQueue = new ArrayList();
        secendRoadQueue = new ArrayList();
    }

    public boolean hasValidPath(char[][] grid) {
        if (grid.length == 0) return false;
        if (grid[0].length == 0) return false;
        if (grid[0][0] != '(' && grid[0][0] != ')') return false;
        moveQueue.add(new Integer[]{0, 0});
        firstRoadQueue.add((grid[0][0] == '(') ? 1 : 0);
        int i = 0;
        int j = 0;
        while (!moveQueue.isEmpty()) {
            Integer[] deletedMove = moveQueue.remove(0);
            i = deletedMove[0];
            j = deletedMove[1];
            
            // now we need to add to the move queue
            if (j + 1 < grid[i].length) {
                moveQueue.add(new Integer[]{i, j + 1});
            }
            // Add bottom if exists
            if (i + 1 < grid.length) {
                moveQueue.add(new Integer[]{i + 1, j});
            }

            for (Integer[] ele : moveQueue) {
                System.out.println(Arrays.toString(ele));
            }
        }
        return true;
    }

    public static void main(String[] args) {
        CheckifThereIsValidParenthesesStringPath instance = new CheckifThereIsValidParenthesesStringPath();
        char[][] matrix = {
            {'(','(',')',')',')','(','(',')','(','(',')','(',')','(','(',')'},
            {')','(',')',')',')',')','(','(','(','(',')',')','(','(','(','('},
            {'(',')',')',')','(','(','(',')','(','(',')',')',')','(',')',')'},
            {'(','(',')',')',')',')','(','(','(',')','(','(','(',')','(','('},
            {'(','(','(','(','(','(',')',')',')','(','(',')',')','(',')',')'},
            {'(','(',')','(',')','(','(','(','(',')',')',')','(','(',')',')'},
            {')','(','(','(',')','(',')',')',')',')','(','(',')',')',')','('},
            {'(','(','(',')','(','(',')',')',')','(','(',')','(',')',')','('},
            {')',')','(',')',')',')','(','(','(',')','(','(',')','(',')',')'},
            {'(','(',')',')',')','(',')',')',')',')','(',')','(','(','(',')'},
            {'(','(','(',')','(',')',')','(','(',')',')',')','(',')','(',')'},
            {'(',')',')',')',')',')',')','(',')',')',')',')','(',')',')',')'},
            {')','(',')',')','(','(','(','(','(',')','(',')','(',')','(',')'},
            {')',')',')',')','(',')',')','(',')',')',')',')','(','(',')',')'}
        };
        System.out.println(instance.hasValidPath(matrix));
    }
}