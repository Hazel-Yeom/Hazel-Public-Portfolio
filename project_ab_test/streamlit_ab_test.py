import streamlit as st
import pandas as pd
import numpy as np
import plotly

st.title("Online A/B Test")

# 사용자 인풋 텍스트 상자
user_input = st.text_input("AB Test", "Test Type")

# 사용자 인풋 출력
st.write(f"안녕하세요, {user_input}!")
