import pandas as pd
import numpy as np
import random

def generate_random_trading_data(num_rows=1000):
    """Generates random trading data.

    Args:
        num_rows: Number of rows in the generated data.

    Returns:
        pandas.DataFrame: Generated trading data.
    """

    # Define possible trade types
    trade_types = ['Buy', 'Sell']

    # Generate random data
    data = {
        'TraderID': np.random.randint(1000, 10000, size=num_rows),
        'Date': pd.date_range(start='2023-01-01', end='2024-01-01', periods=num_rows),
        'TradeType': np.random.choice(trade_types, size=num_rows),
        'EntryPrice': np.random.uniform(100, 200, size=num_rows),
        'ExitPrice': np.random.uniform(80, 220, size=num_rows),
        'Quantity': np.random.randint(10, 100, size=num_rows),
        'Profit/Loss': np.random.normal(0, 10, size=num_rows),
        'Risk': np.random.uniform(2, 5, size=num_rows),
        'Reward': np.random.uniform(3, 8, size=num_rows)
    }

    df = pd.DataFrame(data)

    # Calculate profit/loss based on entry and exit prices
    df['Profit/Loss'] = (df['ExitPrice'] - df['EntryPrice']) * df['Quantity']

    return df

# Generate and save the CSV
df = generate_random_trading_data(1000)
df.to_csv('random_trading_data.csv', index=False)
