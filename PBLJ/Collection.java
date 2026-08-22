import java.util.*;

public class Collection {
    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> warehouse = new ArrayList<>();
        warehouse.add(new ArrayList<>(Arrays.asList(5,12,3)));
        warehouse.add(new ArrayList<>(Arrays.asList(8,2,15)));
        warehouse.add(new ArrayList<>(Arrays.asList(1,20,4)));

        LinkedList<Integer> targetList = new LinkedList<>();
        for(ArrayList<Integer> w : warehouse){
            for(int stock : w){
                if(stock<5){
                    targetList.add(stock*2);
                }
            }
        }
        int i =0;
        for(ArrayList<Integer> w: warehouse){
            System.out.println("section "+ i + ": " + w);
            i++;
        }
        System.out.println(targetList);
    }
}