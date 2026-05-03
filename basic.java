import java.util.Iterator;
import java.util.NoSuchElementException;

public class Main {

    static class SquareGenerator implements Iterator<int[]> {
        private int i = 1;

        public boolean hasNext() {
            return true;
        }

        public int[] next() {
            return new int[]{i, i * i++};
        }
    }

    static boolean isPerfectCube(int n) {
        int c = (int) Math.round(Math.cbrt(n));
        return c * c * c == n;
    }

    static class FilteredSquares implements Iterator<Integer> {
        private SquareGenerator gen = new SquareGenerator();

        public boolean hasNext() {
            return true;
        }

        public Integer next() {
            while (true) {
                int[] pair = gen.next();
                int index = pair[0];
                int value = pair[1];
                if (!isPerfectCube(index)) {
                    return value;
                }
            }
        }
    }

    public static int exponentialGenerator(int n) {
        FilteredSquares gen = new FilteredSquares();
        int result = 0;
        for (int i = 0; i < n; i++) {
            result = gen.next();
        }
        return result;
    }
}
