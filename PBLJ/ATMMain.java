//Student Java Task: ATM Withdrawal System
import java.util.InputMismatchException;
import java.util.Scanner;

// Custom Exception
class InsufficientFundsExceptions extends Exception {
    private double missingAmt;
    public InsufficientFundsExceptions(double missingAmt) {
        super("Insufficient balance! You need " + missingAmt + " more.");
        this.missingAmt = missingAmt;
    }

    public double getMissingAmt() {
        return missingAmt;
    }
}
// BankAccount Class
class BankAcc {
    private double balance;
    public BankAcc(double balance) {
        this.balance = balance;
    }
    public void withdrawal(double amount ) throws InsufficientFundsExceptions {
        if (amount <= 0) {
            throw new IllegalArgumentException("withdrawal amount must be greater than zero.");
        }
        if (amount > balance) {
            throw new InsufficientFundsExceptions(amount - balance);
        }
        balance -= amount;
        System.out.println("Withdrawal Successful!");
        System.out.println("Remaining Balance: $" + balance);
    }
}

// Main Class
public class ATMMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAcc account = new BankAcc(500.00);
        try {
            System.out.print("Enter withdrawal amount: ");
            double amount = sc.nextDouble();
            account.withdrawal(amount);
        }
        catch (InsufficientFundsExceptions e) {
            System.out.println(e.getMessage());
            System.out.println("Missing Amount: $" + e.getMissingAmt());
        }
        catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
        catch (InputMismatchException e) {
            System.out.println("Invalid input! Please enter a numeric value.");
        }
        finally {
            System.out.println("ATM Session Ended.");
            sc.close();
        }
    }
}