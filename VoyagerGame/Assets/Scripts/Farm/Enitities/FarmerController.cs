using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FarmerController : MonoBehaviour
{
    public const float PICKUP_RANGE = 0.5f;
    public float moveSpeed = 3f;
    
    private Animator animator;
    private Rigidbody2D rigidbody;
    private Collider2D collider;

    [SerializeField]
    private GameObject Tool;

    private Vector2 movement;

    // private List<FarmTool> toolList = new List<FarmTool>();
    private FarmTool currentFarmTool;

	// Start is called before the first frame update
	void Start()
    {
        animator = GetComponent<Animator>();
        collider = GetComponent<Collider2D>();
        rigidbody = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        movement.x = Input.GetAxisRaw("Horizontal");
        movement.y = Input.GetAxisRaw("Vertical");
        movement.Normalize();
        if (movement.sqrMagnitude > 0)
        {
            animator.SetFloat("Horizontal", movement.x);
            animator.SetFloat("Vertical", movement.y);
            animator.SetBool("IsMoving", true);
        }
        else
        {
            animator.SetBool("IsMoving", false);
        }

        if (Input.GetKeyDown(KeyCode.Space))
		{
            collectItems(collider.bounds.center, PICKUP_RANGE);
		}

        if (Input.GetKeyDown(KeyCode.Return))
		{

		}
    }

    private void FixedUpdate()
    {
        if (movement != null)
        {
            rigidbody.velocity = new Vector2(movement.x * moveSpeed, movement.y * moveSpeed);
        }
    }

    // functionality
    private void collectItems(Vector2 position, float pickupRange)
    {
        Collider2D[] colliders = Physics2D.OverlapCircleAll(position, pickupRange);
        foreach (Collider2D c in colliders)
        {
            FarmTool item = c.GetComponent<FarmTool>();
            if (item != null)
            {
                item.Collect(this);
            }
        }
    }

    private void useFarmTool()
	{
        if (currentFarmTool == null)
		{
            return;
		}
        currentFarmTool.Use();
	}


    public void collectFarmTool(FarmTool tool)
	{
        currentFarmTool = tool;
	}

}
