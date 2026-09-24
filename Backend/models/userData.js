import mongoose from "mongoose";


// -------------------------
// User Schema
// -------------------------
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    profileImageUrl: {
      type: String,
    },

    currencyPreference: {
      type: String,
      default: "INR",
    },

    joinedDate: {
      type: Date,
      required: true,
    },

    monthlyBudget: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: true }
);


// -------------------------
// Summary Schema
// -------------------------
const summarySchema = new mongoose.Schema(
  {
    periodStart: {
      type: String,
      required: true,
    },

    periodEnd: {
      type: String,
      required: true,
    },

    totalIncomeLast12Months: {
      type: Number,
      default: 0,
    },

    totalSpentLast12Months: {
      type: Number,
      default: 0,
    },

    netSavingsLast12Months: {
      type: Number,
      default: 0,
    },

    averageMonthlyIncome: {
      type: Number,
      default: 0,
    },

    averageMonthlySpend: {
      type: Number,
      default: 0,
    },

    highestSpendingMonth: {
      type: String,
    },

    lowestSpendingMonth: {
      type: String,
    },

    highestIncomeMonth: {
      type: String,
    },
  },
  { _id: false }
);


// -------------------------
// Monthly Summary Schema
// -------------------------
const monthlySummarySchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },

    totalIncome: {
      type: Number,
      default: 0,
    },

    totalSpent: {
      type: Number,
      default: 0,
    },

    netSavings: {
      type: Number,
      default: 0,
    },

    transactionCount: {
      type: Number,
      default: 0,
    },

    // Dynamic categories:
    // {
    //   "Transportation": 13131.02,
    //   "Utilities": 11654.45
    // }
    categoryBreakdown: {
      type: Map,
      of: Number,
      default: {},
    },

    // Dynamic income sources:
    // {
    //   "Salary": 65541.76,
    //   "Freelance": 7856.8
    // }
    incomeBreakdown: {
      type: Map,
      of: Number,
      default: {},
    },
  },
  { _id: false }
);


// -------------------------
// Income Schema
// -------------------------
const incomeSchema = new mongoose.Schema(
  {
    incomeId: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
      index: true,
    },

    source: {
      type: String,
      required: true,
      trim: true,
    },

    payer: {
      type: String,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      default: "INR",
    },

    paymentMode: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);


// -------------------------
// Expense Schema
// -------------------------
const expenseSchema = new mongoose.Schema(
  {
    expenseId: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
      index: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    merchant: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      default: "INR",
    },

    paymentMode: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);


// -------------------------
// Main Expense Tracker Schema
// -------------------------
const expenseTrackerSchema = new mongoose.Schema(
  {
    user: {
      type: userSchema,
      required: true,
    },

    summary: {
      type: summarySchema,
      defaul : {}
    },

    monthlySummary: {
      type: [monthlySummarySchema],
      default: [],
    },

    income: {
      type: [incomeSchema],
      default: [],
    },

    expenses: {
      type: [expenseSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);


const ExpenseTracker = mongoose.model(
  "ExpenseTracker",
  expenseTrackerSchema
);

export default ExpenseTracker;