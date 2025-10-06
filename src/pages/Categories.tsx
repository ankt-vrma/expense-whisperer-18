import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: 1, name: "Food & Dining", count: 45, total: 1240.50, color: "bg-warning" },
  { id: 2, name: "Transport", count: 28, total: 890.00, color: "bg-primary" },
  { id: 3, name: "Shopping", count: 18, total: 650.75, color: "bg-accent" },
  { id: 4, name: "Bills & Utilities", count: 12, total: 980.00, color: "bg-destructive" },
  { id: 5, name: "Entertainment", count: 22, total: 450.25, color: "bg-success" },
  { id: 6, name: "Healthcare", count: 8, total: 320.00, color: "bg-secondary" },
];

const Categories = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Categories</h1>
          <p className="text-muted-foreground">Organize your expenses by category.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                  <span className="text-2xl">📁</span>
                </div>
                <Badge variant="secondary">{category.count} transactions</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${category.total.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground">total spent</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categories.map((category) => {
              const percentage = (category.total / 4531.50) * 100;
              return (
                <div key={category.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded ${category.color}`}></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="font-bold">${category.total.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;
