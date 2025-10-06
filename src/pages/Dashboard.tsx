import { DollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const expenseData = [
  { name: "Jan", amount: 2400 },
  { name: "Feb", amount: 1398 },
  { name: "Mar", amount: 3800 },
  { name: "Apr", amount: 3908 },
  { name: "May", amount: 4800 },
  { name: "Jun", amount: 3800 },
];

const categoryData = [
  { name: "Food", value: 400, color: "hsl(var(--warning))" },
  { name: "Transport", value: 300, color: "hsl(var(--primary))" },
  { name: "Shopping", value: 200, color: "hsl(var(--accent))" },
  { name: "Bills", value: 278, color: "hsl(var(--destructive))" },
  { name: "Entertainment", value: 189, color: "hsl(var(--success))" },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Balance"
          value="$12,450"
          icon={Wallet}
          trend="+20.1% from last month"
          trendUp={true}
        />
        <StatCard
          title="Total Income"
          value="$8,230"
          icon={TrendingUp}
          trend="+12.5% from last month"
          trendUp={true}
        />
        <StatCard
          title="Total Expenses"
          value="$5,780"
          icon={TrendingDown}
          trend="-8.2% from last month"
          trendUp={false}
        />
        <StatCard
          title="Savings"
          value="$2,670"
          icon={DollarSign}
          trend="+15.3% from last month"
          trendUp={true}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }} 
                />
                <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }} 
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Grocery Store", amount: -85.50, date: "Today", category: "Food" },
              { name: "Salary Deposit", amount: 3200.00, date: "Yesterday", category: "Income" },
              { name: "Netflix Subscription", amount: -15.99, date: "2 days ago", category: "Entertainment" },
              { name: "Gas Station", amount: -45.00, date: "3 days ago", category: "Transport" },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex-1">
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date} • {transaction.category}</p>
                </div>
                <p className={`font-bold text-lg ${transaction.amount > 0 ? "text-success" : "text-foreground"}`}>
                  {transaction.amount > 0 ? "+" : ""}{transaction.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
