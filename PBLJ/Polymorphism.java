//polymorphism
class Animals{
    void sound(){
        System.out.println("Sound pf animal");
    }
}

class Dogs extends Animals{
    void sound(){
        System.out.println("Dog barks: Woof!");
    }
}

class Cats extends Animals{
    void sound(){
        System.out.println("Cat meows: Meow!");
    }
}

public class Polymorphism{
    public static void main(String [] args) {
        Animals a = new Dogs();
        Animals b = new Cats();
        a.sound(); //dog
        b.sound(); //cat
    }
}