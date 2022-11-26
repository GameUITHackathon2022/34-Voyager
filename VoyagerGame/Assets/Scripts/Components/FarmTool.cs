using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class FarmTool : MonoBehaviour
{

	public abstract void Use(FarmerController farmer);

	public abstract void Collect(FarmerController farmer);
}
